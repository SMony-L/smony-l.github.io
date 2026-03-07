import React, { useEffect, useRef } from 'react';
import './AIAssistant.css';

const AIAssistant = () => {
  const assistantRef = useRef(null);

  useEffect(() => {
    const assistant = assistantRef.current;
    if (!assistant) return;

    // Floating animation
    let floatDirection = 1;
    let floatPosition = 0;

    const animate = () => {
      floatPosition += 0.02 * floatDirection;
      if (floatPosition > 1 || floatPosition < -1) {
        floatDirection *= -1;
      }
      assistant.style.transform = `translateY(${floatPosition * 20}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="ai-assistant-container">
      <div className="ai-assistant" ref={assistantRef}>
        <div className="ai-core">
          <div className="ai-ring ring-1"></div>
          <div className="ai-ring ring-2"></div>
          <div className="ai-ring ring-3"></div>
          <div className="ai-center">
            <div className="ai-pulse"></div>
          </div>
        </div>
        <div className="ai-data-stream">
          <div className="data-line"></div>
          <div className="data-line"></div>
          <div className="data-line"></div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
