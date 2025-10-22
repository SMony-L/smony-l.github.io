import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendar } from "@fortawesome/free-solid-svg-icons";
import './Experience.css';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return (
      <section className="portfolio-section" id="experience">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-timeline">
            {this.experience.map((exp, index) => (
              <div key={index} className="experience-item modern-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline Connector */}
                <div className="timeline-connector">
                  <div className="timeline-dot">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  {index < this.experience.length - 1 && <div className="timeline-line"></div>}
                </div>

                {/* Content */}
                <div className="experience-content">
                  <div className="experience-header">
                    <div className="experience-title-group">
                      <h3 className="experience-position">{exp.position}</h3>
                      <h4 className="experience-organization">{exp.organization}</h4>
                    </div>
                    <div className="experience-date">
                      <FontAwesomeIcon icon={faCalendar} className="date-icon" />
                      <span>{exp.fromDate} - {exp.toDate}</span>
                    </div>
                  </div>
                  <p className="experience-description">{exp.aboutWork}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
