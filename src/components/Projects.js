import React from 'react';
import '../assets/styles/Projects.css';

function Projects() {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my projects, skills, and experience.',
      techStack: ['React', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/karpagamainthan/portfolio',
      liveLink: 'https://karpagamainthan.github.io/',
    },
    {
      title: 'E-commerce Platform',
      description:
        'Developed a fully functional e-commerce platform with user authentication, product catalog, and cart functionality.',
      techStack: ['Node.js', 'React', 'MongoDB'],
      githubLink: 'https://github.com/karpagamainthan/ecommerce-platform',
      liveLink: '',
    },
    {
      title: 'Task Management App',
      description:
        'A web application to manage tasks efficiently with drag-and-drop functionality and real-time updates.',
      techStack: ['React', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com/karpagamainthan/task-manager',
      liveLink: '',
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-tech-stack">
              {project.techStack.map((tech, i) => (
                <li key={i} className="tech-item">{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link">
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
 
