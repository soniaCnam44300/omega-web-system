import React from 'react';
import { portfolioData } from '../mock';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-page">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-primary mb-6">
              NOS RÉALISATIONS
            </h2>
            <p className="body-large text-primary max-w-3xl mx-auto">
              Découvrez quelques-unes de nos créations. Chaque projet est unique 
              et reflète l'identité de nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project) => (
              <div key={project.id} className="card bg-card border border-border-light group hover:border-brand-primary transition-all duration-500">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="caption text-brand-primary">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="heading-4 text-primary mb-3 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="body-small text-secondary mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-border-medium text-secondary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="card bg-card border border-border-light p-8 max-w-4xl mx-auto">
              <h4 className="heading-4 text-primary mb-4">Votre Projet Suivant ?</h4>
              <p className="body-medium text-secondary mb-6">
                Chaque site web que nous créons est unique et adapté aux besoins spécifiques de nos clients. 
                Parlons de votre projet !
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="caption text-secondary">Design Sur Mesure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="caption text-secondary">Optimisation SEO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="caption text-secondary">Responsive Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
