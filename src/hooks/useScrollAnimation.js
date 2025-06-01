import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
};

export default useScrollAnimation;