import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faAward } from "@fortawesome/free-solid-svg-icons";
import './Education.css';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return (
      <section className="portfolio-section" id="education">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          
          <div className="education-grid">
            {this.education.map((data, index) => (
              <div key={index} className="education-card modern-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Icon */}
                <div className="education-icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>

                {/* Content */}
                <div className="education-content">
                  <h3 className="education-university">{data.university}</h3>
                  
                  <div className="education-degree">
                    <FontAwesomeIcon icon={faAward} className="degree-icon" />
                    <span>{data.degree}</span>
                  </div>

                  <p className="education-major">{data.major}</p>

                  {data.fromDate !== "NA" && data.toDate !== "NA" && (
                    <div className="education-date">
                      {data.fromDate} - {data.toDate}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
