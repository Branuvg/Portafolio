import React from 'react';
import calc from '../assets/calc.png';
import pool from '../assets/pool.png';
import sans from '../assets/sans.png';

const Projects = () => {
  return (
    <section id="projects" className="celeste-theme celeste-pattern">
      <div className="container">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={calc} alt="Calculadora Frontend" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Calculadora Frontend</h3>
              <p>Una Calculadora usando React y Vite solo usando el frontend</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vite</span>
              </div>
              <a href="https://calicheoficial.lat/Bran/calc/" className="btn" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={pool} alt="Pool Center" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Pool Center</h3>
              <p>Creamos una pagina web para una empresa guatemalteca de piscinas, para marketing, generada con React y Vite</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vite</span>
              </div>
              <a href="https://poolcenter.com.gt/" className="btn" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={sans} alt="Sans" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Sans</h3>
              <p>Inicios de Css, basado en uno de mis personajes favoritos de los videojuegos, Undertale</p>
              <div className="project-tech">
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">HTML</span>
              </div>
              <a href="https://calicheoficial.lat/Bran/Lab4_Web/lab_4.html" className="btn" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;