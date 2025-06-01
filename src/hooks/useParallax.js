import { useEffect } from 'react';

const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Efecto de zoom en el fondo
      const parallaxBg = document.querySelector('.parallax-bg');
      if (parallaxBg) {
        const bgSize = 100 + (scrollPosition * 0.1);
        parallaxBg.style.backgroundSize = `${bgSize}%`;
      }
      
      // Overlay dinámico
      const parallaxOverlay = document.querySelector('.parallax-overlay');
      if (parallaxOverlay) {
        const opacity = Math.min(scrollPosition * 1.7 / windowHeight, 0.7);
        parallaxOverlay.style.opacity = opacity;
      }
      
      // Efecto en elementos flotantes
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        const speed = 0.05 + (index * 0.02);
        const yPos = -(scrollPosition * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useParallax;