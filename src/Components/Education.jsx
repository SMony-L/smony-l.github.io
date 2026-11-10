import React from 'react';
import './Education.css';

const Education = ({ education }) => (
  <section className="portfolio-section education-section" id="education">
    <div className="section-container">
      <div className="section-heading">
        <h2 className="section-title">Education</h2>
        <p className="section-intro">Where the foundations came together.</p>
      </div>

      <div className="education-list">
        {education.map((item, index) => (
          <article className="education-item" key={`${item.university}-${item.degree}-${index}`}>
            <h3 className="education-university">{item.university}</h3>
            <div className="education-details">
              <p className="education-degree">{item.degree}</p>
              <p className="education-major">{item.major}</p>
              {item.fromDate !== 'NA' && item.toDate !== 'NA' && (
                <p className="education-date">{item.fromDate} &mdash; {item.toDate}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
