import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;
      
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    const anchorElements = document.querySelectorAll('a[href^="#"]');
    anchorElements.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchorElements.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);
};

export default useSmoothScroll;