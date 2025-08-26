import React from 'react';
import { Button } from './ui/button';
import { servicesData } from '../mock';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-page">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-primary mb-6">
              NOS SERVICES
            </h2>
            <p className="body-large text-primary max-w-3xl mx-auto">
              Des solutions web adaptées à vos besoins et votre budget. 
              Chaque site est unique et conçu pour performer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {servicesData.map((service) => (
              <div key={service.id} className="card bg-card border border-border-light hover:border-brand-primary transition-all duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="heading-4 text-primary mb-3">
                      {service.title}
                    </h3>
                    <div className="text-2xl font-bold text-brand-primary mb-4">
                      {service.price}
                    </div>
                    <p className="body-small text-secondary">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                        <span className="body-small text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={scrollToContact}
                    className="btn-secondary w-full"
                  >
                    CHOISIR CE PACK
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="card bg-card border border-border-light p-8 max-w-4xl mx-auto">
              <h4 className="heading-4 text-primary mb-4">Services Inclus</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-inverse font-bold">✓</span>
                  </div>
                  <h5 className="font-semibold text-primary mb-2">Hébergement</h5>
                  <p className="body-small text-secondary">1 an inclus</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-inverse font-bold">✓</span>
                  </div>
                  <h5 className="font-semibold text-primary mb-2">Nom de domaine</h5>
                  <p className="body-small text-secondary">1 an inclus</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-inverse font-bold">✓</span>
                  </div>
                  <h5 className="font-semibold text-primary mb-2">Maintenance</h5>
                  <p className="body-small text-secondary">Support technique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
