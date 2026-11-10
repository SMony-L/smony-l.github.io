import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => (
  <section className="portfolio-section skills-section" id="skills">
    <div className="section-container">
      <div className="section-heading">
        <h2 className="section-title">Skills</h2>
        <p className="section-intro">Programming languages and tools.</p>
      </div>

      <ul className="skills-grid">
        {skills.map((skill, index) => (
          <li className="skill-badge" key={`${skill.name}-${index}`}>{skill.name}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
