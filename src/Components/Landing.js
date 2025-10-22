import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }

  render() {
    return (
      <section className="landing-section portfolio-section" id="about">
        <div className="landing-container">
          <div className="landing-content">
            {/* Animated Greeting */}
            <div className="greeting fade-in-up">
              <span className="wave">👋</span> Hello, I'm
            </div>

            {/* Name with Gradient */}
            <h1 className="landing-name fade-in-up">
              {this.landingData.firstName}{' '}
              <span className="gradient-text">{this.landingData.lastName}</span>
            </h1>

            {/* Animated Title/Role */}
            <div className="landing-title fade-in-up">
              <span className="typing-text">Solution Architect & Engineer</span>
            </div>

            {/* Bio */}
            <p className="landing-bio fade-in-up">
              {this.landingData.bio}
            </p>

            {/* Contact Info Cards */}
            <div className="contact-cards fade-in-up">
              <a href={`mailto:${this.landingData.email}`} className="contact-card">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span className="contact-text">{this.landingData.email}</span>
              </a>
              <a href={`tel:${this.landingData.phoneNumber}`} className="contact-card">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <span className="contact-text">{this.landingData.phoneNumber}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links fade-in-up">
              <a
                href={this.landingData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
              <a
                href={this.landingData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <p>Scroll to explore</p>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="landing-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
