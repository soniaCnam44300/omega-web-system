import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-page border-b border-border-light backdrop-blur-sm">
      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-design-showcase/artifacts/b1tc6l30_logo.png" 
              alt="OMEGA WEB SYSTEM Logo" 
              className="h-10 w-auto logo-animate"
            />
            <h1 className="text-2xl font-bold text-primary uppercase tracking-tight">
              OMEGA WEB SYSTEM
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link text-primary hover:text-brand-hover transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link text-primary hover:text-brand-hover transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="nav-link text-primary hover:text-brand-hover transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="nav-link text-primary hover:text-brand-hover transition-colors"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-primary hover:text-brand-hover transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            DEVIS GRATUIT
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
