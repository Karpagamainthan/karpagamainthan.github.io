import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, EffectCards } from 'swiper/modules';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';

const Projects = () => {
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
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {/* <p>{isMobile ? 'Swipe left or right to navigate' : 'Use arrow keys or navigation buttons'}</p>      */}
      </motion.div>
      

      <div className="projects-carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, EffectCards]}
          spaceBetween={isMobile ? 10 : 30}
          slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
          loop={true}
          centeredSlides={isMobile}
          grabCursor={true}
          keyboard={{ enabled: true }}
          pagination={{ 
            clickable: true,
            el: '.projects-carousel-dots',
            bulletClass: 'projects-dot',
            bulletActiveClass: 'active'
          }}
          navigation={{
            nextEl: '.carousel-button.next',
            prevEl: '.carousel-button.prev',
          }}
          effect={isMobile ? 'cards' : undefined}
          cardsEffect={{
            slideShadows: false,
            perSlideOffset: isMobile ? 15 : 0,
            perSlideRotate: isMobile ? 2 : 0,
          }}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
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
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
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
                      {project.highlights.slice(0, isMobile ? 2 : 3).map((feature, i) => (
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
                        {project.tech.slice(0, isMobile ? 3 : 5).map((tech, i) => (
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
            </SwiperSlide>
          ))}
        </Swiper>
        
        {!isMobile && (
          <>
            <button 
              className="carousel-button prev" 
              aria-label="Previous projects"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="carousel-button next" 
              aria-label="Next projects"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;