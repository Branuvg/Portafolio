import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="db-theme db-pattern">
      <div className="db-detail"></div>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/Branuvg" className="social-link"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/gabriel-bran-b88158278/" className="social-link"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/gabrielbranb/" className="social-link"><FaInstagram /></a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Gabriel Bran. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;