import React from 'react';

const SkillCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} loading="lazy" />
      <p>{name}</p>
    </div>
  );
};

export default SkillCard;