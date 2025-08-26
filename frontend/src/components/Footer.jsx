import React from 'react';
import { contactInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-border-medium py-16">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_web-design-showcase/artifacts/b1tc6l30_logo.png" 
                  alt="OMEGA WEB SYSTEM Logo" 
                  className="h-8 w-auto logo-animate"
                />
                <h3 className="text-2xl font-bold text-primary uppercase tracking-tight">
                  OMEGA WEB SYSTEM
                </h3>
              </div>
              <p className="body-small text-secondary mb-6 max-w-md">
                Créateur de sites vitrine pour entreprises. Des solutions web sur mesure 
                pour développer votre présence digitale depuis 2020.
              </p>
              
              <div className="space-y-2">
                <p className="body-small text-secondary">
                  <span className="font-medium">Adresse:</span> {contactInfo.address}
                </p>
                <p className="body-small text-secondary">
                  <span className="font-medium">Tel:</span> {contactInfo.phone}
                </p>
                <p className="body-small text-secondary">
                  <span className="font-medium">Email:</span> {contactInfo.email}
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="heading-4 text-primary mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="body-small text-secondary hover:text-brand-primary transition-colors"
                  >
                    À propos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="body-small text-secondary hover:text-brand-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="body-small text-secondary hover:text-brand-primary transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="body-small text-secondary hover:text-brand-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="heading-4 text-primary mb-4">Services</h4>
              <ul className="space-y-3">
                <li className="body-small text-secondary">Sites vitrine</li>
                <li className="body-small text-secondary">Design responsive</li>
                <li className="body-small text-secondary">Optimisation SEO</li>
                <li className="body-small text-secondary">Maintenance web</li>
                <li className="body-small text-secondary">Support technique</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border-light pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="body-small text-secondary">
                  © {currentYear} OMEGA WEB SYSTEM. Tous droits réservés.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <span className="body-small text-secondary">Zones d'intervention:</span>
                <div className="flex items-center space-x-4 text-secondary">
                  <span className="caption">Nantes</span>
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  <span className="caption">Saint-Nazaire</span>
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  <span className="caption">La Baule</span>
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  <span className="caption">Pays de la Loire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
