import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiencesData } from '../../../data/portfolioData';
import './Experience.css';

const PALETTE = [
  '#f97316', 
  '#13afae', 
  '#8b5cf6', 
  '#ef4444', 
  '#22c55e', 
  '#3b82f6', 
  '#f59e0b', 
  '#ec4899',
];

const calcExp = () => {
  const start = new Date(2022, 8);
  const now   = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  return { years: Math.floor(months / 12), months: months % 12 };
};

/* Darken a hex colour by mixing with black */
const darken = (hex, amount = 0.18) => {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.round(((n >> 16) & 255) * (1 - amount)));
  const g = Math.max(0, Math.round(((n >>  8) & 255) * (1 - amount)));
  const b = Math.max(0, Math.round(( n        & 255) * (1 - amount)));
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;
};

/* Alpha hex colour */
const alpha = (hex, a = 0.12) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >>  8) & 255;
  const b =  n        & 255;
  return `rgba(${r},${g},${b},${a})`;
};

const Experience = () => {
  const exp   = calcExp();
  const total = experiencesData.length;

  return (
    <section className="experience" id="experience">
      <div className="container">

        {/* ── Header ── */}
        <div className="exp__header" data-animate>
          <div className="section-title-wrap">
            <span className="section-eyebrow">
              <span className="section-eyebrow__line" />
              Experience
              <span className="section-eyebrow__line" />
            </span>
            <h2 className="section-title-modern">
              Career
              <span className="section-title-modern__accent"> journey</span>
              <span className="exp__dot">.</span>
            </h2>
            <p className="section-title-modern__sub">
              Professional roles that shaped my engineering mindset
            </p>
          </div>
        </div>

        {/* ── Tenure pill ── */}
        <div className="exp__tenure" data-animate>
          <div className="exp__tenure-icon"><FaBriefcase /></div>
          <div className="exp__tenure-body">
            <p className="exp__tenure-label">Total Professional Experience</p>
            <div className="exp__tenure-nums">
              <span className="exp__tenure-big">
                {exp.years}<span className="exp__tenure-unit">yrs</span>
              </span>
              <span className="exp__tenure-sep">+</span>
              <span className="exp__tenure-big">
                {exp.months}<span className="exp__tenure-unit">mo</span>
              </span>
            </div>
            <p className="exp__tenure-meta">
              {total} roles · Currently at {experiencesData[0].company}
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            S-Curve Snake Timeline  (Demo-5)
            Works for ANY number of items.
            Color is injected as --item-color inline.
        ══════════════════════════════════════ */}
        <div className="exp5" style={{ '--total': total }}>
          {experiencesData.map((item, idx) => {
            const color      = PALETTE[idx % PALETTE.length];
            const colorDark  = darken(color);
            const colorGlow  = alpha(color, 0.12);
            const isEven     = idx % 2 === 1;
            const isLast     = idx === total - 1;

            // S-curve bends AWAY from the card side:
            // odd row card is LEFT  → curve bends RIGHT (control point at x=160)
            // even row card is RIGHT → curve bends LEFT  (control point at x=40)
            const curvePath = isEven
              ? 'M 100 0 Q 160 80 100 160'
              : 'M 100 0 Q 40  80 100 160';

            const nextColor = !isLast
              ? PALETTE[(idx + 1) % PALETTE.length]
              : color;

            return (
              <div
                key={idx}
                className={`exp5__row ${isEven ? 'exp5__row--right' : 'exp5__row--left'}`}
                style={{
                  '--item-color'     : color,
                  '--item-color-dark': colorDark,
                  '--item-color-glow': colorGlow,
                  '--item-idx'       : idx,
                }}
              >
                {/* S-curve connector to next item */}
                {!isLast && (
                  <div className="exp5__curve-wrap">
                    <svg
                      className="exp5__curve-svg"
                      viewBox="0 0 200 160"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Top half — current item colour */}
                      <path
                        d={curvePath}
                        fill="none"
                        stroke={color}
                        strokeWidth="26"
                        strokeLinecap="butt"
                      />
                      {/* Bottom half — next item colour, creates clean colour transition */}
                      <path
                        d={curvePath}
                        fill="none"
                        stroke={nextColor}
                        strokeWidth="26"
                        strokeLinecap="butt"
                        strokeDasharray="50% 50%"
                        strokeDashoffset="-50%"
                      />
                    </svg>
                  </div>
                )}

                {/* Year badge on the central spine */}
                <div className="exp5__badge-wrap">
                  <div className="exp5__ring">
                    <div className="exp5__ring-inner">
                      <span className="exp5__year">{item.yearLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="exp5__card">
                  <div className="exp5__card-body">
                    <span className="exp__type-badge">{item.type}</span>
                    <h3 className="exp__role">{item.role}</h3>
                    <p className="exp__company">{item.company}</p>

                    <div className="exp__meta">
                      <span className="exp__meta-item"><FaCalendarAlt />{item.period}</span>
                      <span className="exp__meta-item"><FaMapMarkerAlt />{item.location}</span>
                    </div>

                    <ul className="exp__points">
                      {item.points.map((pt, i) => (
                        <li key={i} className="exp__point">
                          <span className="exp__point-bullet" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="exp__tags">
                      {item.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;