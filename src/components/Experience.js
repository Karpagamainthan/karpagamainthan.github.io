// Experience.js
import React from 'react';
import '../assets/styles/Experience.css';

function Experience() {
  const experienceData = [
    {
      year: '2023 - Present',
      title: 'Software Engineer',
      company: 'PSG Software Technologies',
      description: [
        'Trained with Senior Engineers in specifications, design, coding, testing, and maintenance.',
        'Participated in the entire software development cycle from start to end of the final product.',
      ],
    },
    {
      year: '2022 - 2023',
      title: 'Software Developer Intern',
      company: 'Zoho Corporation',
      description: [
        'Trained with Senior Engineers in specifications, design, coding, testing, and maintenance.',
        'Participated in the entire software development cycle from start to end of the final product.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-container">
      <h2 className="section-title">Professional Experience</h2>
      <div className="roadmap">
        {experienceData.map((item, index) => (
          <div key={index} className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="roadmap-circle"></div>
            <div className="roadmap-content">
              <h3 className="experience-title">{item.title}</h3>
              <p className="experience-company">@ {item.company}</p>
              <p className="experience-year">{item.year}</p>
              <ul className="experience-description">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="roadmap-line"></div>
      </div>
    </section>
  );
}

export default Experience;
