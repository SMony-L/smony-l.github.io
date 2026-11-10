import React from 'react';
import image from '../Assets/profile.jpg';
import './Landing.css';

const Landing = ({ landingData, currentRole }) => {
  const firstName = landingData.firstName.trim();
  const phoneLink = landingData.phoneNumber.replace(/[^\d+]/g, '');

  return (
    <section className="landing-section" id="about">
      <div className="landing-container">
        <div className="landing-layout">
          <div className="landing-content">
            <h1 className="landing-name">
              <span>{firstName}</span>
              <span>{landingData.lastName}<span className="name-period">.</span></span>
            </h1>

            {currentRole && (
              <p className="landing-title">
                {currentRole.position} <span>at</span> {currentRole.organization}
              </p>
            )}

            <p className="landing-bio">{landingData.bio}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href={`mailto:${landingData.email}`}>
                Let's connect <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-socials" role="group" aria-label="Contact and social links">
              <a href={landingData.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href={landingData.github} target="_blank" rel="noopener noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href={`tel:${phoneLink}`}>{landingData.phoneNumber}</a>
            </div>
          </div>

          <div className="hero-art">
            <div className="portrait-halo" aria-hidden="true"></div>
            <svg className="orbit-diagram" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
              <circle cx="300" cy="300" r="248" className="orbit-ring orbit-ring-outer" />
              <circle cx="300" cy="300" r="211" className="orbit-ring orbit-ring-inner" />
              <ellipse cx="300" cy="300" rx="270" ry="155" transform="rotate(-35 300 300)" className="orbit-path" />
              <ellipse cx="300" cy="300" rx="266" ry="160" transform="rotate(39 300 300)" className="orbit-path orbit-path-soft" />
              <g className="orbit-runner">
                <circle cx="300" cy="52" r="6" className="orbit-point" />
                <circle cx="300" cy="52" r="14" className="orbit-point-outline" />
              </g>
              <circle cx="92" cy="204" r="4" className="orbit-point-small" />
              <circle cx="502" cy="395" r="4" className="orbit-point-small" />
            </svg>
            <div className="portrait-frame">
              <img src={image} alt={`Portrait of ${firstName} ${landingData.lastName}`} />
            </div>
            <div className="portrait-note">
              <span className="portrait-note-mark" aria-hidden="true">✳</span>
              <span>Learn, share<br />and inspire.</span>
            </div>
          </div>
        </div>

        <div className="landing-bottom">
          <span>Curiosity meets possibility.</span>
          <a href="#projects">Scroll to explore <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
