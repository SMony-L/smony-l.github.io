import React, { useState, useEffect } from 'react';
import './AIStats.css';

const AIStats = () => {
  const [stats, setStats] = useState({
    experienceYears: 0,
    projectsCompleted: 0,
    technologiesMastered: 0,
    linesOfCode: 0,
  });

  useEffect(() => {
    // Animate numbers on mount
    const targetStats = {
      experienceYears: 10,
      projectsCompleted: 50,
      technologiesMastered: 23,
      linesOfCode: 100000,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        experienceYears: Math.floor(targetStats.experienceYears * progress),
        projectsCompleted: Math.floor(targetStats.projectsCompleted * progress),
        technologiesMastered: Math.floor(targetStats.technologiesMastered * progress),
        linesOfCode: Math.floor(targetStats.linesOfCode * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ai-stats-container portfolio-section">
      <div className="ai-stats-wrapper">
        <h2 className="section-title">System Metrics</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <div className="icon-pulse"></div>
              <span className="icon-text">⚡</span>
            </div>
            <div className="stat-value">{stats.experienceYears}+</div>
            <div className="stat-label">Years Experience</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <div className="icon-pulse"></div>
              <span className="icon-text">🚀</span>
            </div>
            <div className="stat-value">{stats.projectsCompleted}+</div>
            <div className="stat-label">Projects Deployed</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <div className="icon-pulse"></div>
              <span className="icon-text">💻</span>
            </div>
            <div className="stat-value">{stats.technologiesMastered}+</div>
            <div className="stat-label">Technologies</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <div className="icon-pulse"></div>
              <span className="icon-text">📊</span>
            </div>
            <div className="stat-value">{(stats.linesOfCode / 1000).toFixed(0)}K+</div>
            <div className="stat-label">Lines of Code</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="system-status">
          <div className="status-item">
            <span className="status-indicator active"></span>
            <span className="status-text">All Systems Operational</span>
          </div>
          <div className="status-item">
            <span className="status-indicator processing"></span>
            <span className="status-text">Processing Requests</span>
          </div>
          <div className="status-item">
            <span className="status-indicator standby"></span>
            <span className="status-text">Ready for Deployment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStats;
