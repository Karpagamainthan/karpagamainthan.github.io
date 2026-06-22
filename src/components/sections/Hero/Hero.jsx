import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import { personalInfo, assets, socialLinks } from '../../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedEl.current) {
      typedInstance.current = new Typed(typedEl.current, {
        strings: personalInfo.roles,
        typeSpeed: 55,
        backSpeed: 30,
        backDelay: 1800,
        loop: true,
        showCursor: true,
        cursorChar: '_',
      });
    }
    return () => typedInstance.current?.destroy();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Background elements */}
      <div className="hero__bg">
        <div className="hero__circle hero__circle--1" />
        <div className="hero__circle hero__circle--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content container">
        <div className="hero__left">
          {/* Status badge */}
          <div className="hero__badge" data-animate>
            <span className="hero__badge-dot" />
            Available for new projects
          </div>

          {/* Name */}
          <h1 className="hero__name" data-animate data-delay="100">
            <span className="hero__name-greeting">Hello, I'm</span>
            <span className="hero__name-first">{personalInfo.name.first}</span>
            <span className="hero__name-last">
              {personalInfo.name.last}<span className="hero__accent">.</span>
            </span>
          </h1>

          {/* Role typed */}
          <div className="hero__role" data-animate data-delay="200">
            <span className="hero__role-label">I'm a </span>
            <span ref={typedEl} className="hero__role-typed" />
          </div>

          {/* Description */}
          <p className="hero__desc" data-animate data-delay="300">
            {personalInfo.bioHero}
          </p>

          {/* CTA */}
          <div className="hero__cta" data-animate data-delay="400">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View My Work <FaArrowDown style={{ fontSize: '0.75rem' }} />
            </button>
            <a href={personalInfo.resumeUrl} className="btn-outline" download>
              <FaDownload style={{ fontSize: '0.75rem' }} /> Resume
            </a>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>

          {/* Social links */}
          <div className="hero__socials" data-animate data-delay="500">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href={socialLinks.email} className="hero__social" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Profile card */}
        <div className="hero__right" data-animate-right data-delay="200">
          <div className="hero__card">
            <div className="hero__img-wrap">
              <img
                src={assets.profileImages.hero}
                alt={`${personalInfo.name.first} ${personalInfo.name.last}`}
                className="hero__img"
                loading="eager"
              />
              <div className="hero__img-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll" onClick={() => scrollTo('about')}>
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </button>
    </section>
  );
};

export default Hero;