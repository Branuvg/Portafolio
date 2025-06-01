import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">GB</div>
          <span>Portfolio</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contáctame</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;