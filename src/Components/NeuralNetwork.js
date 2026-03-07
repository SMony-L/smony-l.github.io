import React, { useEffect, useRef } from 'react';
import './NeuralNetwork.css';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes = [];
    const nodeCount = 30;
    const layers = 4;

    // Create nodes in layers
    for (let layer = 0; layer < layers; layer++) {
      const nodesInLayer = Math.floor(nodeCount / layers);
      for (let i = 0; i < nodesInLayer; i++) {
        nodes.push({
          x: (canvas.width / (layers + 1)) * (layer + 1),
          y: (canvas.height / (nodesInLayer + 1)) * (i + 1),
          layer: layer,
          activation: Math.random(),
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update activations
      nodes.forEach(node => {
        node.activation = Math.sin(Date.now() / 1000 + node.x / 100 + node.y / 100) * 0.5 + 0.5;
      });

      // Draw connections
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i < j && Math.abs(node.layer - otherNode.layer) === 1) {
            const strength = (node.activation + otherNode.activation) / 2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${strength * 0.1})`;
            ctx.lineWidth = strength * 1.5;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4 + node.activation * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${node.activation})`);
        gradient.addColorStop(1, `rgba(123, 47, 247, ${node.activation * 0.5})`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 15 * node.activation;
        ctx.shadowColor = `rgba(0, 212, 255, ${node.activation})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-network" />;
};

export default NeuralNetwork;
