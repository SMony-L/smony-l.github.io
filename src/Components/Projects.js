import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCode } from "@fortawesome/free-solid-svg-icons";
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return (
      <section className="portfolio-section projects-section" id="projects">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {this.projects.map((proj, index) => (
              <div 
                key={index} 
                className="project-card modern-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Icon */}
                <div className="project-icon">
                  <FontAwesomeIcon icon={faRocket} />
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{proj.title}</h3>
                  
                  <div className="project-tech">
                    <FontAwesomeIcon icon={faCode} className="tech-icon" />
                    <span>{proj.projectLang}</span>
                  </div>

                  <p className="project-description">{proj.aboutProject}</p>
                </div>

                {/* Hover Overlay */}
                <div className="project-overlay"></div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="projects-footer">
            <p>More projects coming soon! Check out my <a href={this.projects[0]?.githubLink || "#"} target="_blank" rel="noopener noreferrer">GitHub</a> for additional work.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
