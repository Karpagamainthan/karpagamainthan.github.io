import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "PSG Software Technologies",
      duration: "July 2023 – Present",
      location: "Coimbatore, India",
      points: [
        "Designed and developed RESTful APIs using Node.js",
        "Integrated secure payment gateways (Paytm & Billdesk)",
        "Implemented JWT authentication and role-based access control",
        "Utilized Redis for caching and performance optimization",
        "Followed Agile methodology and conducted API testing with Postman"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Zoho Corporation",
      duration: "September 2022 – April 2023",
      location: "Chennai, India",
      points: [
        "Contributed to web application development and maintenance",
        "Collaborated with senior developers in an Agile environment",
        "Enhanced debugging and database management skills",
        "Worked on real-world software development practices"
      ]
    }
  ];

  const calculateTotalExperience = () => {
    const startDate = new Date(2022, 8);
    const currentDate = new Date();

    let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += currentDate.getMonth();

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return { years, months: remainingMonths };
  };

  const totalExp = calculateTotalExperience();

  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="exp-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="exp-title">Professional Experience</h2>
        <p className="exp-subtitle">My career journey and contributions</p>
      </motion.div>

      <div className="experience-container">
        <motion.div
          className="exp-stats-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          viewport={{ once: true }}
        >
          <div className="exp-stats-icon">
            <FaUserTie size={24} />
          </div>
          <div className="exp-stats-content">
            <h3>Professional Tenure</h3>
            <div className="exp-stats-value">
              <div className="exp-time-block">
                <span className="exp-years">{totalExp.years}</span>
                <span className="exp-unit">Years</span>
              </div>
              <div className="exp-time-block">
                <span className="exp-months">{totalExp.months}</span>
                <span className="exp-unit">Months</span>
              </div>
            </div>
            <div className="exp-stats-meta">
              <span>{experiences.length} Key Roles</span>
              <span className="meta-separator">•</span>
              <span>Currently at {experiences[0].company}</span>
            </div>
          </div>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot" />
                {index !== experiences.length - 1}
              </div>

              <motion.div
                className="timeline-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="timeline-header">
                  <div className="role-icon">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3>{exp.role}</h3>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <span className="duration">
                        <FaCalendarAlt /> {exp.duration}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="point-bullet" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;