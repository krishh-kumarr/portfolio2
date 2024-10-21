import React, { useState } from 'react';

const GlareCard = ({ title, children }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="card-container mb-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="card rounded-xl p-6 border-4 border-transparent transition-transform duration-200 ease-out"
        style={{
          position: 'relative',
          overflow: 'hidden',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="rounded-xl p-6" // Removed the gradient and color styles
          style={{ 
            position: 'relative', 
            zIndex: 2 
          }}
        >
          <h3
            className="text-3xl font-semibold mb-4 text-white"
            style={{ transform: 'translateZ(50px)', fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </h3>
          <div className="text-gray-200" style={{ transform: 'translateZ(30px)', fontFamily: 'Poppins, sans-serif', color: 'rgba(255, 255, 255, 0.85)' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlareCard;
