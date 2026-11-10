import React from 'react';
import './Projects.css';

const Projects = ({ projects, githubUrl }) => (
  <section className="portfolio-section projects-section" id="projects">
    <div className="section-container">
      <div className="section-heading">
        <h2 className="section-title">Projects</h2>
        <p className="section-intro">A selection of ideas explored through code.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={`${project.title}-${index}`}>
            <div className="project-meta">
              <span className="project-tech">{project.projectLang}</span>
              <span className="project-symbol" aria-hidden="true">✳</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.aboutProject}</p>
          </article>
        ))}
      </div>

      <p className="projects-footer">
        More projects coming soon! Check out my{' '}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        {' '}for additional work.
      </p>
    </div>
  </section>
);

export default Projects;
