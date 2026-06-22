import React from 'react';
import {
  FaCode, FaShieldAlt, FaDatabase, FaServer,
  FaCloud, FaUsers, FaGraduationCap, FaAward,
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight,
} from 'react-icons/fa';
import { personalInfo, assets, aboutData } from '../../../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* ── Modern section header ── */}
        <div className="about__header" data-animate>
          <div className="section-title-wrap">
            <span className="section-eyebrow">
              <span className="section-eyebrow__line" />
              About Me
              <span className="section-eyebrow__line" />
            </span>
            <h2 className="section-title-modern">
              The person behind
              <span className="section-title-modern__accent"> the code</span>
              <span className="about__dot">.</span>
            </h2>
            <p className="section-title-modern__sub">
              Building robust software with a passion for clean architecture
            </p>
          </div>
        </div>

        {/* ── Hero bento grid ── */}
        <div className="about__bento" data-animate>

          {/* Profile card — tall left column */}
          <div className="about__bento-profile">
            <div className="about__avatar-frame">
              <div className="about__avatar-glow" />
              <img
                src={assets.profileImages.about}
                alt={`${personalInfo.name.first} ${personalInfo.name.last}`}
                className="about__avatar-img"
                loading="lazy"
              />
              <div className="about__avatar-badge">
                <span className="about__avatar-badge-dot" />
                Available
              </div>
            </div>

            <div className="about__profile-text">
              <p className="about__profile-name">{personalInfo.name.first} {personalInfo.name.last}</p>
              <p className="about__profile-role">Software Engineer</p>
            </div>

            <div className="about__contact-list">
              <a className="about__contact-item" href={`mailto:${personalInfo.contact.email}`}>
                <span className="about__contact-icon"><FaEnvelope /></span>
                <span className="about__contact-label">{personalInfo.contact.email}</span>
              </a>
              <div className="about__contact-item">
                <span className="about__contact-icon"><FaPhone /></span>
                <span className="about__contact-label">{personalInfo.contact.phone}</span>
              </div>
              <div className="about__contact-item">
                <span className="about__contact-icon"><FaMapMarkerAlt /></span>
                <span className="about__contact-label">{personalInfo.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="about__bento-stats">
            {aboutData.stats.map((s, i) => (
              <div key={s.label} className="about__stat-tile" style={{ '--i': i }}>
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Bio card */}
          <div className="about__bento-bio">
            <p className="about__desc">
              {personalInfo.bioAbout[0]}
            </p>
            <p className="about__desc">
              {personalInfo.bioAbout[1]}
            </p>
          </div>

          {/* Highlight grid */}
          <div className="about__bento-highlights">
            {aboutData.highlights.map((h, i) => (
              <div key={i} className="about__hl-card" data-animate data-delay={i * 60}>
                <span className="about__hl-icon">{h.icon}</span>
                <div>
                  <h4 className="about__hl-title">{h.title}</h4>
                  <p className="about__hl-desc">{h.desc}</p>
                </div>
                <FaArrowRight className="about__hl-arrow" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom: edu / cert / tech ── */}
        <div className="about__bottom" data-animate>

          <div className="about__edu">
            <div className="about__section-label">
              <FaGraduationCap className="about__section-icon" />
              <span>Education</span>
            </div>
            <div className="about__edu-card">
              <div className="about__edu-year-bar">{aboutData.education.year}</div>
              <h4>{aboutData.education.degree}</h4>
              <p>{aboutData.education.institution}</p>
              <div className="about__edu-meta">
                <span className="tag">{aboutData.education.cgpa}</span>
              </div>
            </div>
          </div>

          <div className="about__cert">
            <div className="about__section-label">
              <FaAward className="about__section-icon" />
              <span>Certification</span>
            </div>
            <div className="about__cert-item">
              <span className="about__cert-bullet" />
              {aboutData.certification}
            </div>
          </div>

          <div className="about__tech">
            <div className="about__section-label">
              <FaCode className="about__section-icon" />
              <span>Tech Stack</span>
            </div>
            <div className="about__tech-grid">
              {aboutData.techStack.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;