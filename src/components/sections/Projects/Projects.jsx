import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCheck, FaLock } from 'react-icons/fa';
import { projectsData, socialLinks } from '../../../data/portfolioData';
import './Projects.css';

const CATS = ['all', 'fullstack', 'backend', 'frontend'];

const CAT_COLORS = {
  fullstack: '#e85d26',
  backend:   '#13afae',
  frontend:  '#8b5cf6',
};

const ProjectCard = ({ proj, index }) => {
  const accentColor = CAT_COLORS[proj.category] || 'var(--accent-2)';

  return (
    <article
      className={`pj-card pj-card--enter${proj.featured ? ' pj-card--featured' : ''}`}
      style={{ '--card-accent': accentColor, animationDelay: `${index * 80}ms` }}
    >
      {/* Decorative number */}
      <span className="pj-card__bg-num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Top accent bar */}
      <div className="pj-card__accent-bar" />

      {/* Header row */}
      <div className="pj-card__header">
        <div className="pj-card__badges">
          <span className="pj-card__cat-badge">{proj.category}</span>
          {proj.featured && <span className="pj-card__featured-badge">★ Featured</span>}
        </div>
        <div className="pj-card__links">
          {proj.code ? (
            <a
              href={proj.code}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-link pj-link--ghost"
              aria-label="View source code"
            >
              <FaGithub /> <span>Code</span>
            </a>
          ) : null}
          {proj.demo ? (
            <a
              href={proj.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-link pj-link--solid"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt /> <span>Live</span>
            </a>
          ) : null}
          {!proj.code && !proj.demo && (
            <span className="pj-link pj-link--locked">
              <FaLock /> <span>Private</span>
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="pj-card__title">{proj.title}</h3>

      {/* Description */}
      <p className="pj-card__desc">{proj.desc}</p>

      {/* Highlights */}
      <ul className="pj-card__highlights">
        {proj.highlights.map((h, i) => (
          <li key={i} className="pj-card__highlight">
            <FaCheck className="pj-card__check" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      {/* Footer: tech stack */}
      <div className="pj-card__footer">
        <div className="pj-card__tech">
          {proj.tech.map(t => (
            <span key={t} className="pj-card__tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [cat, setCat] = useState('all');
  const filtered = cat === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === cat);

  return (
    <section className="projects" id="projects">
      <div className="container">

        {/* Header */}
        <div className="projects__header" data-animate>
          <div className="section-title-wrap">
            <span className="section-eyebrow">
              <span className="section-eyebrow__line" />
              Projects
              <span className="section-eyebrow__line" />
            </span>
            <h2 className="section-title-modern">
              Selected
              <span className="section-title-modern__accent"> work</span>
              <span className="projects__dot">.</span>
            </h2>
            <p className="section-title-modern__sub">
              Showcasing technical capabilities and real-world problem solving.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="projects__tabs" data-animate>
          {CATS.map(c => {
            const count = c === 'all'
              ? projectsData.length
              : projectsData.filter(p => p.category === c).length;
            return (
              <button
                key={c}
                className={`projects__tab${cat === c ? ' active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
                <span className="projects__tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="projects__grid" key={cat}>
          {filtered.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects__cta" data-animate>
          <p className="projects__cta-text">
            More projects and open-source contributions on GitHub
          </p>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline projects__cta-btn"
          >
            <FaGithub /> View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
