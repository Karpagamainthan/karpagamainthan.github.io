import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3>{project.title}</h3>
        {project.subtitle && <p className="card-subtitle">{project.subtitle}</p>}
      </div>

      <div className="card-image">
        <img src={project.images[0] || '/images/default-project.jpg'} alt={project.title} />
      </div>

      <ul className="project-features">
        {project.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      {project.link && (
        <a href={project.link} className="demo-btn" target="_blank" rel="noopener noreferrer">
          <FiExternalLink /> Live Demo
        </a>
      )}
    </div>
  );
};

export default ProjectCard;