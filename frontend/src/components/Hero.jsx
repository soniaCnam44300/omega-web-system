import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section min-h-screen flex items-center bg-page pt-20 relative overflow-hidden">
      {/* Background decoration avec le logo */}
      <div className="absolute top-20 right-20 opacity-5 floating-logo">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-design-showcase/artifacts/b1tc6l30_logo.png" 
          alt="Background Logo" 
          className="h-96 w-auto"
        />
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="brand-display text-primary mb-8">
            SITES WEB
            <br />
            <span className="gradient-text">PROFESSIONNELS</span>
          </h1>
          
          <p className="body-large text-secondary mb-8 max-w-2xl">
            Créateur de sites vitrine pour entreprises depuis 2020. 
            Des solutions web sur mesure pour développer votre présence digitale avec excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="btn-primary"
            >
              VOIR NOS RÉALISATIONS
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              DEMANDER UN DEVIS
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 text-secondary">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span className="caption">À partir de 500€</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent-secondary rounded-full"></div>
              <span className="caption">Livraison en 15 jours</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent-success rounded-full"></div>
              <span className="caption">Support inclus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
