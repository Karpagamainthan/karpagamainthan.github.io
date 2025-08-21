import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const projects = [
    {
      title: "Laudea Fees",
      description: "Secure payment gateway integration with cloud storage",
      highlights: [
        "Integrated Paytm & Billdesk payment processing",
        "JWT authentication with RBAC",
        "AWS S3 storage with Redis caching"
      ],
      tech: ["Node.js", "MongoDB", "Redis", "AWS S3", "JWT"],
      image: "/assets/img/projects/fees.png",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "CO/PO",
      description: "NBA accreditation system for educational outcomes",
      highlights: [
        "Automated outcome calculations",
        "Data visualization dashboard",
        "MySQL database integration"
      ],
      tech: ["Java", "Servlet", "JSP", "MySQL"],
      image: "/assets/img/projects/copo.png",
      demoLink: "",
      codeLink: "https://github.com/Karpagamainthan/COPO"
    },
    {
      title: "COVID-19 Tracker",
      description: "Real-time pandemic data visualization",
      highlights: [
        "Interactive state-wise statistics",
        "API integration with dynamic charts",
        "Responsive dashboard"
      ],
      tech: ["JavaScript", "Node.js", "API"],
      image: "/assets/img/projects/covid19.png",
      demoLink: "",
      codeLink: "https://github.com/Karpagamainthan/Covid-19-dashboard"
    },
    {
      title: "Employee Management",
      description: "Console-based HR records system",
      highlights: [
        "CRUD operations for employee data",
        "JDBC database connectivity",
        "Modular Java architecture"
      ],
      tech: ["Java", "JDBC"],
      image: "/assets/img/projects/emp1.png",
      demoLink: "",
      codeLink: "https://github.com/Karpagamainthan/employee-mgmt-system"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width <= 768;
      const tablet = width > 768 && width <= 1024;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      
      if (mobile) {
        setProjectsPerPage(1);
      } else if (tablet) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(3);
      }
      
      if (mobile || tablet) setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= projects.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, projects.length]);

  const totalProjects = projects.length;
  const maxIndex = Math.max(0, totalProjects - projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  if (!projects || projects.length === 0) {
    return (
      <section className="projects-section" id="projects">
        <div className="projects-section-header">
          <h2>My Projects</h2>
          <p>No projects to display at the moment</p>
        </div>
      </section>
    );
  }

  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>My Projects</h2>
        <p>Selected work showcasing my technical capabilities</p>
      </motion.div>

      <div className="projects-carousel">
        {!isMobile && totalProjects > projectsPerPage && (
          <button
            className="projects-nav-btn projects-prev-btn"
            onClick={prevSlide}
            aria-label="Previous projects"
          >
            <FaChevronLeft />
          </button>
        )}

        <div className="projects-container">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}-${currentIndex}`}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!isMobile ? {
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
              } : {}}
            >
              <div className="project-card-image">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/img/projects/default.png';
                    }}
                  />
                )}
                <div className="project-card-overlay" />
              </div>
              <div className="project-card-content">
                <div className="project-card-header">
                  <h3>{project.title || 'Untitled Project'}</h3>
                  <p className="project-card-description">
                    {project.description || 'No description available'}
                  </p>
                </div>

                {project.highlights?.length > 0 && (
                  <ul className="project-features">
                    {project.highlights.map((feature, i) => (
                      <li key={i}>
                        <span className="project-feature-bullet" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-card-footer">
                  {project.tech?.length > 0 && (
                    <div className="project-tech-stack">
                      {project.tech.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                  )}

                  <div className="project-links">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="project-demo-btn"
                        aria-label={`View ${project.title} demo`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        className="project-code-btn"
                        aria-label={`View ${project.title} source code`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isMobile && totalProjects > projectsPerPage && (
          <button
            className="projects-nav-btn projects-next-btn"
            onClick={nextSlide}
            aria-label="Next projects"
          >
            <FaChevronRight />
          </button>
        )}
      </div>

      {totalProjects > projectsPerPage && (
        <div className="projects-carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`projects-dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`View project set ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;