import React from 'react';
import './Footer.css';

const Footer = ({ landingData }) => {
  const currentYear = new Date().getFullYear();
  const firstName = landingData.firstName.trim();
  const phoneLink = landingData.phoneNumber.replace(/[^\d+]/g, '');

  return (
    <footer className="portfolio-footer" id="contact">
      <div className="footer-content">
        <div className="footer-callout">
          <div>
            <h2>Let's connect.</h2>
            <p>Have an idea or just want to say hello?</p>
          </div>
          <a className="footer-email" href={`mailto:${landingData.email}`}>
            {landingData.email} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-links">
          <a href={`tel:${phoneLink}`}>{landingData.phoneNumber}</a>
          <a href={landingData.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={landingData.github} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {firstName} {landingData.lastName}. All rights reserved.</p>
          <p>Designed &amp; Built by {firstName} {landingData.lastName} · Powered by GitHub Copilot</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
