import React from 'react';
import { FaCode, FaGit, FaPython, FaNodeJs, FaCloud, FaJava } from 'react-icons/fa'; // General icons
import { SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiDjango, SiFlask, SiDocker, SiTensorflow, SiScikitlearn, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si'; // Language-specific icons

const Skillset = () => {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  };

  const iconStyle = {
    fontSize: '50px',  // Increased icon size
    marginBottom: '10px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.5)';
  };

  const removeHoverEffect = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Still Learning ....🤔 · 🧐 · 👀 · ✨</h2>
      <div style={gridStyle}>
        {/* Skill Cards */}
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiCplusplus style={iconStyle} />
          <p>C++</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <FaPython style={iconStyle} />
          <p>Python</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiJavascript style={iconStyle} />
          <p>JavaScript</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiTypescript style={iconStyle} />
          <p>TypeScript</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiHtml5 style={iconStyle} />
          <p>HTML5</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiCss3 style={iconStyle} />
          <p>CSS3</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiReact style={iconStyle} />
          <p>React.js</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <FaNodeJs style={iconStyle} />
          <p>Node.js</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiDjango style={iconStyle} />
          <p>Django</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiFlask style={iconStyle} />
          <p>Flask</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiDocker style={iconStyle} />
          <p>Docker</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <FaGit style={iconStyle} />
          <p>Git</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiTensorflow style={iconStyle} />
          <p>TensorFlow</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiScikitlearn style={iconStyle} />
          <p>Scikit-learn</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiMongodb style={iconStyle} />
          <p>MongoDB</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiPostgresql style={iconStyle} />
          <p>PostgreSQL</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <SiMysql style={iconStyle} />
          <p>MySQL</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <FaJava style={iconStyle} />
          <p>Java</p>
        </div>
        <div style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
          <FaCloud style={iconStyle} />
          <p>AWS</p>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
