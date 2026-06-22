import React, { useState, useMemo } from 'react';
import { FaCode, FaStar, FaRegStar } from 'react-icons/fa';
import { skillsData } from '../../../data/portfolioData';
import './Skills.css';

const CATS = ['all', 'backend', 'frontend', 'database', 'tools'];

const expToMonths = (exp) => {
  if (!exp) return 0;
  const v = parseFloat(exp);
  return exp.includes('year') ? v * 12 : v;
};

const Stars = ({ level }) => {
  if (level == null) return null;
  return (
    <div className="skill-stars">
      {[1, 2, 3, 4, 5].map(i => {
        const full = i <= Math.floor(level);
        const half = !full && i - 0.5 <= level;
        return (
          <span key={i} className={`skill-star${full ? ' full' : half ? ' half' : ''}`}>
            {full || half ? <FaStar /> : <FaRegStar />}
          </span>
        );
      })}
    </div>
  );
};

const Skills = () => {
  const [cat, setCat] = useState('all');

  /* ✅ Filter fix: strict equality match, no data-animate on cards */
  const filtered = useMemo(
    () =>
      [...skillsData.skills]
        .filter(s => cat === 'all' || s.category === cat)
        .sort((a, b) => expToMonths(b.exp) - expToMonths(a.exp)),
    [cat]
  );

  return (
    <section className="skills" id="skills">
      <div className="container">

        {/* Header */}
        <div className="skills__header" data-animate>
          <div className="section-title-wrap">
            <span className="section-eyebrow">
              <span className="section-eyebrow__line" />
              Skills
              <span className="section-eyebrow__line" />
            </span>
            <h2 className="section-title-modern">
              Technical
              <span className="section-title-modern__accent"> expertise</span>
              <span className="skills__dot">.</span>
            </h2>
            <p className="section-title-modern__sub">
              Tools &amp; technologies I've worked with professionally
            </p>
          </div>
        </div>

        {/* Tabs — no data-animate, always visible */}
        <div className="skills__tabs">
          {CATS.map(c => (
            <button
              key={c}
              className={`skills__tab${cat === c ? ' active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid
            ✅ key={cat}  → forces full remount on filter change
            ✅ NO data-animate on cards → they won't get stuck invisible */}
        <div className="skills__grid" key={cat}>
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card skill-card--visible"
              style={{ animationDelay: `${i * 35}ms` }}
            >
              <div className="skill-card__icon-wrap">
                <img src={skill.icon} alt={skill.name} className="skill-card__icon" loading="lazy" />
              </div>
              <div className="skill-card__info">
                <h3 className="skill-card__name">{skill.name}</h3>
                {skill.exp && <span className="skill-card__exp">{skill.exp}</span>}
              </div>
              <Stars level={skill.level} />
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="skills__interests" data-animate>
          <div className="skills__interests-label">
            <FaCode /> Areas of Interest
          </div>
          <div className="skills__interests-grid">
            {skillsData.interests.map((item, i) => (
              <div key={item} className="interest-pill" style={{ animationDelay: `${i * 45}ms` }}>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;