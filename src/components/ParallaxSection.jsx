import React from 'react';
import portaBackground from '../assets/porta_background.png';
import useParallax from '../hooks/useParallax';

const ParallaxSection = () => {
  useParallax();
  
  return (
    <section className="parallax-section">
      <div 
        className="parallax-bg" 
        style={{ backgroundImage: `url(${portaBackground})` }}
      ></div>
      <div className="parallax-overlay"></div>
      
      <div className="parallax-element float" style={{ top: '15%', left: '10%', fontSize: '5rem' }}>🍄</div>
      <div className="parallax-element float" style={{ top: '25%', right: '15%', fontSize: '4rem', animationDelay: '0.5s' }}>🐉</div>
      <div className="parallax-element float" style={{ bottom: '20%', left: '20%', fontSize: '6rem', animationDelay: '1s' }}>🏁</div>
      <div className="parallax-element float" style={{ bottom: '30%', right: '10%', fontSize: '5rem', animationDelay: '1.5s' }}>❄️</div>
      <div className="parallax-element float" style={{ top: '40%', left: '45%', fontSize: '7rem', animationDelay: '2s' }}>🎾</div>
      
      <div className="parallax-content">
        <h1 className="parallax-title">PORTAFOLIO</h1>
        <p className="parallax-subtitle">Gabriel Bran</p>
      </div>
    </section>
  );
};

export default ParallaxSection;