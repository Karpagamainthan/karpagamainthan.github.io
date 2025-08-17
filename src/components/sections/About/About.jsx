import React from 'react';
import './About.css';
import {
  FaCode,
  FaShieldAlt,
  FaUsers,
  FaDatabase,
  FaServer,
  FaGraduationCap,
  FaCloud,
  FaUniversity,
  FaAward,
  FaProjectDiagram
} from 'react-icons/fa';

const About = () => {
  const techStack = [
    'Java', 'Node.js', 'React', 'Angular', 'MongoDB', 'MySQL',
    'AWS', 'JWT', 'REST APIs', 'Redis', 'Docker', 'Git',
    'HTML5', 'CSS3', 'JavaScript', 'Servlet', 'JSP', 'C',
    'Applets'
  ];

  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "Building end-to-end applications with Java, Node.js, and modern frameworks"
    },
    {
      icon: <FaServer />,
      title: "API Development",
      description: "Designed RESTful APIs for efficient system communication"
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Optimized MongoDB queries and MySQL performance"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Implementation",
      description: "JWT authentication with role-based access control"
    },
    {
      icon: <FaUsers />,
      title: "Agile Team Player",
      description: "Collaborated in Agile teams at PSG Tech and Zoho"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Implemented AWS S3 for cloud storage solutions"
    },
    {
      icon: <FaProjectDiagram />,
      title: "Project Experience",
      description: "Developed multiple production-grade applications"
    }
  ];

  const education = {
    degree: "B.Tech in Information Technology",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    duration: "2019-2023",
    cgpa: "7.9 CGPA"
  };

  const certifications = [
    "Certified in Java (KICE Infosystems, 2019)"
  ];

  const strengths = [
    "Quick Learner",
    "Problem Solver",
    "Team Player",
    "Creative Thinker"
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            <span className="title-highlight">About Me</span>
          </h2>
          <p className="about-subtitle">Full-Stack Developer | Java & JavaScript Specialist</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-desc">
              I'm a <strong>solution-driven software developer</strong> with professional experience at <strong>PSG Software Technologies</strong> and <strong>Zoho Corporation</strong>, specializing in full-stack development with expertise in both frontend and backend technologies.
            </p>
            
            <p className="about-desc">
              My technical skills encompass the complete software development lifecycle, from requirement analysis to deployment. I've successfully delivered projects involving <strong>payment gateway integration</strong> (Paytm, Billdesk), <strong>cloud storage solutions</strong> (AWS S3), and <strong>secure authentication</strong> systems.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div className="highlight-card" key={index}>
                  <div className="highlight-front">
                    <span className="highlight-icon">{item.icon}</span>
                    <h4>{item.title}</h4>
                  </div>
                  <div className="highlight-back">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="education-section">
              <h4 className="about-section-title">
                <FaUniversity className="section-icon" /> Education
              </h4>
              <div className="education-item">
                <h4>{education.degree}</h4>
                <p>{education.institution} • {education.duration}</p>
                <p>{education.cgpa}</p>
              </div>
            </div>

            <div className="certifications-section">
              <h3 className="about-section-title">
                <FaAward className="section-icon" /> Certifications
              </h3>
              <ul>
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-tech">
            <h3 className="tech-title">Technical Proficiencies</h3>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <div className="tech-item" key={index}>{tech}</div>
              ))}
            </div>

            <div className="key-strengths">
              <h3 className="tech-title">Key Strengths</h3>
              <div className="strengths-grid">
                {strengths.map((strength, index) => (
                  <div className="strength-item" key={index}>{strength}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;