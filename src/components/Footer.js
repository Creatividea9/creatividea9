import React from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
        <a href="mailto:info@example.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
      <div className="footer-options">
        <p>Connect with us:</p>
        <a href="tel:+123456789">123-456-789</a>
        <a href="mailto:info@example.com">info@example.com</a>
      </div>
    </footer>
  );
};

export default Footer;
