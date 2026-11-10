import React from 'react';
import './AIStats.css';

const highlights = [
  { value: '10+', label: 'Years experience' },
  { value: '50+', label: 'Projects deployed' },
  { value: '23+', label: 'Technologies' },
  { value: '100K+', label: 'Lines of code' },
];

const AIStats = () => (
  <section className="ai-stats-container" aria-labelledby="highlights-title">
    <div className="ai-stats-wrapper">
      <h2 id="highlights-title">At a glance</h2>
      <dl className="stats-grid">
        {highlights.map((highlight) => (
          <div className="stat-item" key={highlight.label}>
            <dt>{highlight.label}</dt>
            <dd>{highlight.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default AIStats;
