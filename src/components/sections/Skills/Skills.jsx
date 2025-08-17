import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { FaCode, FaStar } from 'react-icons/fa';
import { useState, useMemo } from 'react';
import './Skills.css';

const Skills = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Skills data
  const skills = [
    { name: "C", icon: "/assets/img/skills/c.png", category: "backend", experience: "1 years", confidence: 4 },
    { name: "Java", icon: "/assets/img/skills/java.png", category: "backend", experience: "1 years", confidence: 4 },
    { name: "Node.js", icon: "/assets/img/skills/nodejs.png", category: "backend", experience: "3 years", confidence: 5 },
    { name: "Angular", icon: "/assets/img/skills/angular.png", category: "frontend", experience: "3 years", confidence: 4 },
    { name: "CSS", icon: "/assets/img/skills/css.png", category: "frontend", experience: "3 years", confidence: 4 },
    { name: "HTML", icon: "/assets/img/skills/html.png", category: "frontend", experience: "3 years", confidence: 5 },
    { name: "JavaScript", icon: "/assets/img/skills/java-script.png", category: "frontend", experience: "3 years", confidence: 5 },
    { name: "React", icon: "/assets/img/skills/react.png", category: "frontend", experience: "10 months", confidence: 3 },
    { name: "MongoDB", icon: "/assets/img/skills/mongodb.png", category: "database", experience: "3 years", confidence: 5 },
    { name: "MySQL", icon: "/assets/img/skills/mysql.png", category: "database", experience: "1 years", confidence: 3.5 },
    { name: "Docker", icon: "/assets/img/skills/docker.png", category: "tool" },
    { name: "Eclipse", icon: "/assets/img/skills/java_eclipse.png", category: "tool" },
    { name: "Git", icon: "/assets/img/skills/github.png", category: "tool" },
    { name: "Intellij", icon: "/assets/img/skills/intellij.png", category: "tool" },
    { name: "VS Code", icon: "/assets/img/skills/vscode.png", category: "tool" }
  ];

  const interests = [
    "Full-Stack Development",
    "RESTful API Design",
    "Cloud Architecture",
    "Database Optimization",
    "System Security",
    "Microservices",
    "Agile Methodologies",
    "UI/UX Principles"
  ];

  // Get unique categories (only from skills that have a category)
  const categories = ['all', ...new Set(skills.filter(skill => skill.category).map(skill => skill.category))];

  // Memoize filtered skills
  const filteredSkills = useMemo(() => {
    const toMonths = (exp) => {
      if (!exp) return 0;
      const val = parseFloat(exp);
      return exp.includes("year") ? val * 12 : val;
    };

    const sorted = [...skills].sort((a, b) => toMonths(b.experience) - toMonths(a.experience));

    return selectedCategory === 'all'
      ? sorted
      : sorted.filter(skill => skill.category === selectedCategory);
  }, [selectedCategory, skills]);

  const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">Technologies I've mastered</p>
        </motion.div>

        <div className="skills-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {capitalize(category)}
            </button>
          ))}
        </div>

        <motion.div
          key={`skills-grid-${selectedCategory}`}
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {filteredSkills.length === 0 ? (
            <motion.div
              className="no-skills-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No skills found in the {selectedCategory} category.
            </motion.div>
          ) : (
            filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="skill-card"
                variants={{
                  hidden: { y: 30, opacity: 0, scale: 0.9 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 10
                    }
                  }
                }}
                whileHover={!isMobile ? {
                  y: -8,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                } : {}}
              >
                <div className="skill-header">
                  <div className="skill-icon-container">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  </div>
                  <div className="skill-meta">
                    <h3 className="skill-name">{skill.name}</h3>
                    {skill.category && (
                      <span className="skill-category">{capitalize(skill.category)}</span>
                    )}
                  </div>
                </div>

                <div className="skill-details">
                  {skill.experience && (
                    <div className="skill-experience">
                      <span className="experience-value">{skill.experience}</span>
                    </div>
                  )}

                  {skill.confidence !== undefined && (
                    <div className="confidence-meter">
                      <div className="confidence-stars">
                        {[...Array(5)].map((_, i) => {
                          const full = i + 1 <= Math.floor(skill.confidence);
                          const half = i < skill.confidence && i + 1 > skill.confidence;

                          return (
                            <div key={i} className="star-container">
                              <FaStar className={`star-icon ${full ? 'active' : ''}`} />
                              {half && (
                                <div className="half-star-mask">
                                  <FaStar className="star-icon" />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        <motion.div
          className="interests-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="interest-subtitle">Areas of Interest</h3>
          <motion.div
            className="interests-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {interests.map((interest) => (
              <motion.div
                key={interest}
                className="interest-item"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 10
                    }
                  }
                }}
                whileHover={!isMobile ? {
                  x: 5
                } : {}}
              >
                <FaCode className="interest-icon" />
                {interest}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;