import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase 
} from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="f1-theme f1-pattern">
      <div className="container">
        <h2>Mis Habilidades</h2>
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-icon"><FaHtml5 /></div>
            <h3 className="skill-name">HTML</h3>
            <p>Maquetación semántica y accesible para todo tipo de dispositivos.</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon"><FaCss3Alt /></div>
            <h3 className="skill-name">CSS</h3>
            <p>Estilos avanzados, animaciones y diseño responsivo.</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon"><FaJs /></div>
            <h3 className="skill-name">JavaScript</h3>
            <p>Interactividad, manipulación del DOM y desarrollo de aplicaciones.</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon"><FaReact /></div>
            <h3 className="skill-name">React</h3>
            <p>Desarrollo de interfaces modernas y componentes reutilizables.</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon"><FaNodeJs /></div>
            <h3 className="skill-name">Node.js</h3>
            <p>Desarrollo backend y creación de APIs RESTful.</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon"><FaDatabase /></div>
            <h3 className="skill-name">Bases de Datos</h3>
            <p>Postgres, MySQL y diseño de estructuras de datos eficientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;