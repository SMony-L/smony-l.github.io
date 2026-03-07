import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="copilot-badge">
            <span className="status-dot"></span>
            <span>Powered by</span>
            <strong className="gradient-text">GitHub Copilot</strong>
          </div>

          <div className="footer-divider"></div>

          <p className="footer-text">
            <span className="footer-code">{'>'}</span> Designed & Built by <span className="gradient-text">Sovan"mony" Lim</span>
          </p>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} All rights reserved.</p>
          <div className="footer-tech">
            <span>React</span>
            <span className="tech-dot">·</span>
            <span>CSS3</span>
            <span className="tech-dot">·</span>
            <span>GitHub Pages</span>
          </div>
        </div>

        {/* AI-themed decorative elements */}
        <div className="footer-decorations">
          <div className="footer-circuit"></div>
          <div className="footer-circuit"></div>
          <div className="footer-circuit"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
