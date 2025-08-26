import React from 'react';
import { testimonialsData } from '../mock';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-lg ${i < rating ? 'text-brand-primary' : 'text-border-medium'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-page">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-primary mb-6">
              TÉMOIGNAGES CLIENTS
            </h2>
            <p className="body-large text-primary max-w-3xl mx-auto">
              La satisfaction de nos clients est notre priorité. 
              Découvrez ce qu'ils pensent de nos services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="card bg-card border border-border-light hover:border-brand-primary transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="body-small text-secondary mb-6 italic">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                      <span className="text-inverse font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="body-small text-secondary">
                        {testimonial.company}
                      </div>
                      <div className="caption text-secondary">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="card bg-card border border-border-light p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="heading-2 text-brand-primary mb-2">100%</div>
                  <div className="caption text-secondary">Clients Satisfaits</div>
                </div>
                <div>
                  <div className="heading-2 text-brand-primary mb-2">15j</div>
                  <div className="caption text-secondary">Délai Moyen</div>
                </div>
                <div>
                  <div className="heading-2 text-brand-primary mb-2">1 an</div>
                  <div className="caption text-secondary">Support Gratuit</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border-light">
                <h4 className="heading-4 text-primary mb-4">
                  Rejoignez nos clients satisfaits
                </h4>
                <p className="body-small text-secondary">
                  Des entrepreneurs comme vous nous font confiance pour leur présence web. 
                  À votre tour de booster votre activité !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
