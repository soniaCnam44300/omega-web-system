# 🚀 OMEGA WEB SYSTEM

Site vitrine professionnel pour OMEGA WEB SYSTEM - Création de sites web pour entreprises.

![Logo OMEGA WEB SYSTEM](https://customer-assets.emergentagent.com/job_web-design-showcase/artifacts/b1tc6l30_logo.png)

## ⚡ Installation rapide Laragon

```bash
# Cloner dans Laragon
cd C:\laragon\www
git clone https://github.com/VOTRE_USERNAME/omega-web-system.git
cd omega-web-system

# Backend
cd backend && pip install -r requirements.txt

# Frontend  
cd ../frontend && yarn install

# Configuration
copy backend\.env.example backend\.env
# Éditer .env avec vos paramètres SendGrid

# Lancer
start-omega-laragon.bat
