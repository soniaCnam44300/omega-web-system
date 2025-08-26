from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
import logging

logger = logging.getLogger(__name__)

class EmailDeliveryError(Exception):
    pass

def send_email(to: str, subject: str, content: str, content_type: str = "html"):
    """Send email via SendGrid"""
    sender_email = os.getenv('FROM_EMAIL', 'noreply@omegawebsystem.fr')
    
    message = Mail(
        from_email=sender_email,
        to_emails=to,
        subject=subject,
        html_content=content if content_type == "html" else None,
        plain_text_content=content if content_type == "plain" else None
    )

    try:
        api_key = os.getenv('SENDGRID_API_KEY')
        if not api_key:
            logger.error("SendGrid API key not found")
            raise EmailDeliveryError("Email service not configured")
            
        sg = SendGridAPIClient(api_key)
        response = sg.send(message)
        logger.info(f"Email sent to {to}, status: {response.status_code}")
        return response.status_code == 202
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise EmailDeliveryError(f"Failed to send email: {str(e)}")

def send_contact_form_email(form_data: dict):
    """Send contact form email to OMEGA WEB SYSTEM"""
    recipient_email = os.getenv('TO_EMAIL', 'sdobigeon@gmail.com')
    subject = f"Nouvelle demande de devis - OMEGA WEB SYSTEM - {form_data.get('name', 'Client')}"

    html_content = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #3b82f6; color: white; padding: 20px; text-align: center;">
                    <h1 style="margin: 0;">OMEGA WEB SYSTEM</h1>
                    <p style="margin: 5px 0 0 0;">Nouvelle demande de devis</p>
                </div>
                
                <div style="padding: 20px; background-color: #f9f9f9;">
                    <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                        Informations du client
                    </h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; width: 150px;">Nom complet:</td>
                            <td style="padding: 8px 0;">{form_data.get('name', 'Non spécifié')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                            <td style="padding: 8px 0;">{form_data.get('email', 'Non spécifié')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Téléphone:</td>
                            <td style="padding: 8px 0;">{form_data.get('phone', 'Non spécifié')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Entreprise:</td>
                            <td style="padding: 8px 0;">{form_data.get('company', 'Non spécifié')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Type de projet:</td>
                            <td style="padding: 8px 0;">{form_data.get('project', 'Non spécifié')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Budget:</td>
                            <td style="padding: 8px 0;">{form_data.get('budget', 'Non spécifié')}</td>
                        </tr>
                    </table>
                    
                    <h3 style="color: #3b82f6; margin-top: 25px;">Message du client:</h3>
                    <div style="background-color: white; padding: 15px; border-left: 4px solid #3b82f6; margin: 10px 0;">
                        <p style="margin: 0; white-space: pre-wrap;">{form_data.get('message', 'Aucun message')}</p>
                    </div>
                </div>
                
                <div style="padding: 20px; text-align: center; background-color: #333; color: white;">
                    <p style="margin: 0;">
                        Email envoyé automatiquement par le formulaire de contact du site OMEGA WEB SYSTEM
                    </p>
                </div>
            </div>
        </body>
    </html>
    """

    return send_email(recipient_email, subject, html_content, "html")
