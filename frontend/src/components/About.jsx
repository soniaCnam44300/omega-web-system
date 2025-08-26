import React from 'react';
import { aboutData } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-page">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_web-design-showcase/artifacts/b1tc6l30_logo.png" 
                alt="OMEGA WEB SYSTEM Logo" 
                className="h-12 w-auto logo-animate"
              />
              <h2 className="heading-1 text-primary">
                {aboutData.title}
              </h2>
            </div>
            <p className="body-large text-primary max-w-3xl mx-auto">
              {aboutData.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="heading-3 text-primary mb-4">Notre Mission</h3>
              <p className="body-medium text-secondary">
                {aboutData.mission}
              </p>
              
              <h4 className="heading-4 text-primary mb-4 mt-8">Notre Expertise</h4>
              <ul className="space-y-3">
                {aboutData.expertise.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                    <span className="body-small text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="card bg-card border border-border-light p-6 text-center">
                  <div className="heading-2 text-brand-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="caption text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="card bg-card border border-border-light p-8 max-w-4xl mx-auto">
              <p className="body-medium text-primary mb-4">
                Basée à Bourgneuf en Retz, OMEGA WEB SYSTEM intervient dans toute la région Pays de la Loire.
              </p>
              <p className="body-small text-secondary">
                Notre approche personnalisée et notre engagement qualité font de nous le partenaire idéal 
                pour votre projet web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
