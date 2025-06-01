import { useEffect } from 'react';

const useNavScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (!nav) return;
      
      if (window.scrollY > 100) {
        nav.style.padding = '10px 0';
        nav.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
      } else {
        nav.style.padding = '20px 0';
        nav.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useNavScroll;