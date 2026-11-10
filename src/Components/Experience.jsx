import React from 'react';
import './Experience.css';

const Experience = ({ experience }) => (
  <section className="portfolio-section experience-section" id="experience">
    <div className="section-container">
      <div className="section-heading">
        <h2 className="section-title">Experience</h2>
        <p className="section-intro">The work and people that have shaped my journey.</p>
      </div>

      <ol className="experience-list">
        {experience.map((item, index) => (
          <li className="experience-item" key={`${item.organization}-${item.position}-${item.fromDate}-${index}`}>
            <div className="experience-meta">
              <p className="experience-organization">{item.organization}</p>
              <p className="experience-date">{item.fromDate} &mdash; {item.toDate}</p>
            </div>
            <div className="experience-content">
              <h3 className="experience-position">{item.position}</h3>
              <p className="experience-description">{item.aboutWork}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
