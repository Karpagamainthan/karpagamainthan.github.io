import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__monogram">{personalInfo.name.monogram}<span className="footer__dot">.</span></span>
          <p className="footer__tagline">Building with purpose, shipping with care.</p>
        </div>

        <div className="footer__nav">
          {['about', 'skills', 'experience', 'projects', 'contact'].map(id => (
            <button key={id} className="footer__link" onClick={() => scrollTo(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <div className="footer__socials">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={socialLinks.email} className="footer__social" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} {personalInfo.name.first} {personalInfo.name.last}. All rights reserved.</p>
        <p className="footer__credit">Designed & Built with care</p>
      </div>
    </footer>
  );
};

export default Footer;