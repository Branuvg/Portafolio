import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="spiderman-theme spiderman-pattern">
      <div className="container">
        <h2>Contáctame</h2>
        <div className="spiderman-detail"></div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h3>Email</h3>
                <p>gabrielbranb@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaPhone /></div>
              <div>
                <h3>Teléfono</h3>
                <p>(+502) 4265 1703</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h3>Ubicación</h3>
                <p>Guatemala Guatemala</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaGithub /></div>
              <div>
                <h3>GitHub</h3>
                <p>github.com/Branuvg</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-control" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-control" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea 
                  id="message" 
                  className="form-control" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;