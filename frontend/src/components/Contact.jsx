import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { contactInfo } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data.success) {
        toast.success(response.data.message);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          project: '',
          budget: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      const errorMessage = error.response?.data?.detail || 
                          'Erreur lors de l\'envoi du message. Veuillez réessayer.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-page">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-primary mb-6">
              CONTACTEZ-NOUS
            </h2>
            <p className="body-large text-primary max-w-3xl mx-auto">
              Prêt à donner vie à votre projet web ? Contactez-nous pour un devis gratuit 
              et personnalisé.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card bg-card border border-border-light p-8">
                <h3 className="heading-4 text-primary mb-6">Informations de Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-inverse text-sm">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Adresse</h4>
                      <p className="body-small text-secondary">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-inverse text-sm">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Téléphone</h4>
                      <p className="body-small text-secondary">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-inverse text-sm">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p className="body-small text-secondary">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-inverse text-sm">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Horaires</h4>
                      <p className="body-small text-secondary">{contactInfo.hours.weekdays}</p>
                      <p className="body-small text-secondary">{contactInfo.hours.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-card border border-border-light p-8">
                <h3 className="heading-4 text-primary mb-4">Pourquoi Nous Choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                    <span className="body-small text-secondary">Devis gratuit sous 24h</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                    <span className="body-small text-secondary">Accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                    <span className="body-small text-secondary">Support technique inclus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                    <span className="body-small text-secondary">Prix transparents</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card bg-card border border-border-light p-8">
              <h3 className="heading-4 text-primary mb-6">Demande de Devis</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-primary mb-2">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-bg-page border-border-medium text-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-medium text-primary mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-bg-page border-border-medium text-primary"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-primary mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="bg-bg-page border-border-medium text-primary"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-medium text-primary mb-2">
                      Entreprise
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="bg-bg-page border-border-medium text-primary"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-primary mb-2">
                      Type de projet *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full p-3 bg-bg-page border border-border-medium rounded-lg text-primary"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="site-vitrine">Site vitrine</option>
                      <option value="site-ecommerce">Site e-commerce</option>
                      <option value="refonte">Refonte de site</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-medium text-primary mb-2">
                      Budget approximatif
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full p-3 bg-bg-page border border-border-medium rounded-lg text-primary"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="500-800">500€ - 800€</option>
                      <option value="800-1200">800€ - 1200€</option>
                      <option value="1200-2000">1200€ - 2000€</option>
                      <option value="2000+">Plus de 2000€</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-primary mb-2">
                    Décrivez votre projet *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-bg-page border-border-medium text-primary resize-none"
                    placeholder="Décrivez votre projet, vos objectifs, vos besoins spécifiques..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER MA DEMANDE'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
