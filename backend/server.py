from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import ContactFormData, ContactSubmission, ContactResponse
from emails import send_contact_form_email, EmailDeliveryError
from typing import List

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="OMEGA WEB SYSTEM API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@api_router.get("/")
async def root():
    return {"message": "OMEGA WEB SYSTEM API - Hello World"}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(form_data: ContactFormData, background_tasks: BackgroundTasks):
    """
    Submit contact form and send email to OMEGA WEB SYSTEM
    """
    try:
        # Create contact submission record
        submission = ContactSubmission(**form_data.dict())
        
        # Save to database
        await db.contact_submissions.insert_one(submission.dict())
        logger.info(f"Contact form submission saved: {submission.id}")
        
        # Send email in background task
        background_tasks.add_task(
            send_contact_form_email,
            form_data.dict()
        )
        logger.info(f"Email task queued for submission: {submission.id}")
        
        return ContactResponse(
            success=True,
            message="Votre demande a été envoyée avec succès ! Nous vous répondrons dans les plus brefs délais."
        )
        
    except EmailDeliveryError as e:
        logger.error(f"Email delivery failed: {str(e)}")
        try:
            submission = ContactSubmission(**form_data.dict())
            await db.contact_submissions.insert_one(submission.dict())
        except Exception as db_error:
            logger.error(f"Database save failed: {str(db_error)}")
        
        raise HTTPException(
            status_code=500, 
            detail="Erreur lors de l'envoi de l'email. Veuillez réessayer ou nous contacter directement."
        )
        
    except Exception as e:
        logger.error(f"Unexpected error in contact form submission: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Une erreur inattendue s'est produite. Veuillez réessayer."
        )

@api_router.get("/contact-submissions", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """
    Get all contact form submissions (for admin use)
    """
    try:
        submissions = await db.contact_submissions.find().sort("created_at", -1).to_list(100)
        return [ContactSubmission(**submission) for submission in submissions]
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération des données")

@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy", 
        "service": "omega-web-system-api",
        "version": "1.0.0"
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
