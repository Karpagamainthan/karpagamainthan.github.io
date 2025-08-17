import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null);

  const handleScroll = () => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    setIsSticky(window.scrollY > headerHeight * 0.5);
    
    const sections = document.querySelectorAll('section[id]');
    let current = 'hero';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    setActiveSection(current);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const offsetPosition = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header 
      className={`header ${isSticky ? 'sticky' : ''} ${menuOpen ? 'menu-open' : ''}`} 
      ref={headerRef}
    >
      <div className='header-container'>
        <div className='brand'>
          <img
            src={theme === 'dark' ? '/assets/img/logo/km_logo-white.png' : '/assets/img/logo/km_logo.png'}
            alt='Logo'
            className='logo'
          />
          <span className='name'>Karpagamainthan M</span>
        </div>

        <nav className='desktop-nav'>
          <ul className='nav-list'>
            {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className='actions'>
          <button
            className='theme-toggle'
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <FaSun className='icon' />
            ) : (
              <FaMoon className='icon' />
            )}
          </button>
          <a
            href='/assets/pdf/Karpagamainthan_Resume.pdf'
            className='download-btn'
            download
          >
            <span>Resume</span>
            <FaDownload className='download-icon' />
          </a>
          <button
            className='menu-toggle'
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-container'>
          <div className='mobile-nav'>
            <ul>
              {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='mobile-actions'>
            <button
              className='mobile-theme-toggle'
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <>
                  <FaSun className='icon' />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FaMoon className='icon' />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
            <a
              href='/assets/pdf/Karpagamainthan_Resume.pdf'
              className='mobile-download-btn'
              download
            >
              <FaDownload className='icon' />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;