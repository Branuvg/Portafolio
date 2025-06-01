import React from 'react';
import yo_tennis from '../assets/yo_tennis.jpg';

const About = () => {
  return (
    <section id="about" className="mario-theme mario-pattern">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre Mí</h2>
            <p>¡Hola! Soy Gabriel Bran Bolaños, un estudiante en la Universidad del Valle de Guatemala, aprendiendo todo lo que pueda sobre la computación y la codificación, pero soy mas que eso y te vengo a enseñar quien soy yo. Nací en Guatemala y Estudie en el Colegio Centro Escolar El Roble, con una pasión por las matemáticas y con la tecnología en si, mi sueño es poder llegar a ser un programador de videojuegos ya que además de horas de diversión, los videojuegos (aunque pueda ser algo muy nicho) me han enseñado mucho y quiero poder alegrarle el día a alguien y si se llevan algo para aprender y expandir sus conocimientos y curiosidad, mejor.</p>
            <p>Como lo mencione antes me gustan muchos los videojuegos, especialmente los plataformeros como Mario y Celeste, pero fuera de la computadora también me gustan hacer otras cosas como escalar volcanes, ver formula 1, jugar tennis, como se puede ver en la foto a la par mía, quiero aprender mas cosas, como tocar un instrumento (actualmente el ukulele) o hacer speedruns.</p>
            <p>Por el momento no se mucho sobre programar videojuegos, pero si tengo experiencia en la programación como tal, en paginas web he estado perfeccionando mis habilidades en frontend, backend y diseño de interfaces de usuario. También como me interesan muchos las mates, actualmente estoy intentando ser auxiliar de las clases que pueda en mi Universidad así no pierdo esos conocimientos y conozco gente nueva.</p>
            <a href="#contact" className="btn">Contáctame</a>
          </div>
          <div className="about-image">
            <img src={yo_tennis} alt="Gabriel Bran jugando tennis" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;