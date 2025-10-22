import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="copilot-badge">
            <svg className="copilot-icon" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.5 1.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75zm-4 4a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75zm8 0a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75z"/>
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0z"/>
            </svg>
            <span>Built with</span>
            <strong className="gradient-text">GitHub Copilot</strong>
          </div>
          
          <div className="footer-divider"></div>
          
          <p className="footer-text">
            Designed & Developed by <span className="gradient-text">Sovanmony Lim</span>
          </p>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} All rights reserved.</p>
          <div className="footer-tech">
            <span>React</span>
            <span>•</span>
            <span>CSS3</span>
            <span>•</span>
            <span>GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
