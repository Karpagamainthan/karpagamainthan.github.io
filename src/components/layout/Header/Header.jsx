import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import { personalInfo, assets } from '../../../data/portfolioData';
import './Header.css';

const NAV = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
const LABELS = { hero: 'Home', about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact' };

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll('section[id]');
      let cur = 'hero';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const hh = headerRef.current?.offsetHeight || 0;
      window.scrollTo({ top: el.offsetTop - hh, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header ref={headerRef} className={`header${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <button className="header__logo" onClick={() => scrollTo('hero')}>
          <img
            src={theme === 'dark' ? assets.logo.dark : assets.logo.light}
            alt={`${personalInfo.name.first} Logo`}
            className="header__logo-img"
          />
          <span className="header__logo-name">{personalInfo.name.first}<span className="dot">.</span></span>
        </button>

        {/* Desktop nav */}
        <nav className="header__nav">
          {NAV.map((id, i) => (
            <button
              key={id}
              className={`nav-item${active === id ? ' active' : ''}`}
              onClick={() => scrollTo(id)}
              style={{ '--i': i }}
            >
              {LABELS[id]}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a href={personalInfo.resumeUrl} className="resume-btn" download>
            <FaDownload className="resume-btn__icon" />
            <span>Resume</span>
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Backdrop — rendered into body so it sits in the root stacking context
          and reliably receives taps across every section including Hero */}
      {menuOpen && ReactDOM.createPortal(
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />,
        document.body
      )}

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu__inner">
          <nav className="mobile-nav">
            {NAV.map((id, i) => (
              <button
                key={id}
                className={`mobile-nav-item${active === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
                style={{ '--i': i }}
              >
                <span className="mobile-nav-num">{String(i + 1).padStart(2, '0')}</span>
                {LABELS[id]}
              </button>
            ))}
          </nav>
          <div className="mobile-menu__footer">
            <button className="theme-btn theme-btn--mobile" onClick={toggleTheme}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <a href={personalInfo.resumeUrl} className="resume-btn resume-btn--mobile" download>
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;