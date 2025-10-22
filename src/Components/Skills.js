import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import './Skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return (
      <section className="portfolio-section" id="skills">
        <div className="section-container">
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-intro">
            <FontAwesomeIcon icon={faCode} className="skills-intro-icon" />
            <p>Programming Languages & Tools</p>
          </div>

          <div className="skills-grid">
            {this.skills.map((data, index) => (
              <div 
                key={index} 
                className="skill-badge fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="skill-name">{data.name}</span>
                <div className="skill-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
