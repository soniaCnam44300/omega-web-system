// Animations pour OMEGA WEB SYSTEM

// Animation d'apparition au scroll
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec la classe animate-on-scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
};

// Animation du logo flottant
export const initFloatingAnimations = () => {
  const floatingElements = document.querySelectorAll('.floating-logo');
  
  floatingElements.forEach((element, index) => {
    // Décalage pour chaque élément
    element.style.animationDelay = `${index * 0.5}s`;
  });
};

// Effet parallax léger sur les éléments de fond
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  });
};

// Initialisation de toutes les animations
export const initAllAnimations = () => {
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initFloatingAnimations();
      initParallaxEffect();
    });
  } else {
    initScrollAnimations();
    initFloatingAnimations();
    initParallaxEffect();
  }
};
