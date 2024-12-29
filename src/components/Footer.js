import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Karpagamainthan. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
