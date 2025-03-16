import React from 'react';
import '../assets/styles/Skills.css';

// Import images or icons for the skills
import javaLogo from '../assets/images/logo/java.png';
import cLogo from '../assets/images/logo/c.png';
import jsLogo from '../assets/images/logo/java-script.png';
import htmlLogo from '../assets/images/logo/html.png';
import cssLogo from '../assets/images/logo/css.png';
import nodejsLogo from '../assets/images/logo/nodejs.png';
import mysqlLogo from '../assets/images/logo/mysql.png';
import mongodbLogo from '../assets/images/logo/mongodb.png';
import gitLogo from '../assets/images/logo/github.png';
import vscodeLogo from '../assets/images/logo/vscode.png';
import eclipseLogo from '../assets/images/logo/java_eclipse.png';
import intellijLogo from '../assets/images/logo/intellij.png';

function Skills() {
  const skills = [
    { name: 'Java', logo: javaLogo },
    { name: 'C', logo: cLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Node.js', logo: nodejsLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'MongoDB', logo: mongodbLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'Visual Studio Code', logo: vscodeLogo },
    { name: 'Eclipse', logo: eclipseLogo },
    { name: 'IntelliJ', logo: intellijLogo },
  ];

  return (
    <section id="skills" className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
