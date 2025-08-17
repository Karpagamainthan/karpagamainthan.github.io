import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import Typed from 'typed.js';

const Hero = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    const debouncedResize = debounce(handleResize, 200);
    
    handleResize();
    window.addEventListener('resize', debouncedResize);

    if (!isMobileView && !typedRef.current) {
      typedRef.current = new Typed('.typed', {
        strings: ['Software Engineer', 'Full Stack Developer', 'Java Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
      window.removeEventListener('resize', debouncedResize);
    };
  }, [isMobileView]);

  const socialLinks = [
    {
      url: "https://github.com/karpagamainthan",
      icon: "fab fa-github",
      label: "GitHub"
    },
    {
      url: "https://www.linkedin.com/in/karpagamainthan-m-515a1722b",
      icon: "fab fa-linkedin-in",
      label: "LinkedIn"
    },
    {
      url: "mailto:karpagamainthan@gmail.com",
      icon: "fas fa-envelope",
      label: "Email"
    }
  ];

  return (
    <section className="hero" data-animate>
      {isMobileView ? (
        <MobileView socialLinks={socialLinks} />
      ) : (
        <DesktopViewWithBG socialLinks={socialLinks} />
      )}
    </section>
  );
};

const MobileView = ({ socialLinks }) => (
  <div className="hero-mobile">
    <div className="hero-image">
      <img 
        src="/assets/img/profile/profile.jpg" 
        alt="Karpagamainthan M Profile" 
        loading="lazy"
        width="150"
        height="150"
      />
    </div>
    
    <div className="hero-content">
      <h1 className="hero-title">
        Hi, I'm <span className="highlight">Karpagamainthan M</span> <span role="img" aria-label="waving hand">👋</span>
      </h1>
      <p className="hero-desc">
        I'm a <span className="highlight-text">Full Stack Developer</span> specializing in
        <strong> Java</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, and
        modern web technologies.
      </p>

      <div className="hero-meta">
        <div className="hero-location">
          <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
          <span>Tirupur, India</span>
        </div>
        <p className="hero-availability">
          <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
          <span>Available for new projects</span>
        </p>
      </div>

      <div className="hero-socials">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={link.icon} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const DesktopViewWithBG = ({ socialLinks }) => (
  <div className="hero-desktop-with-bg">
    <div className="hero-overlay">
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <h1 className="hero-name">KARPAGAMAINTHAN M</h1>
            <p className="hero-role">
              I'm <span className="typed"></span>
              <span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
            </p>
            
            <div className="hero-description">
              <p>Specializing in <strong>Java</strong>, <strong>JavaScript</strong>, and modern web technologies.</p>
              <p>Building scalable applications with clean code and strong architecture.</p>
            </div>

            <div className="hero-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>Tirupur, India</span>
              </div>
              <div className="info-item">
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                <span>Available for new projects</span>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#contact" className="cta-button">Get In Touch</a>
              <a href="#projects" className="cta-button secondary">View Projects</a>
            </div>
          </div>

          <div className="hero-socials">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
  
export default Hero;