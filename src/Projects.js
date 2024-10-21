import React from 'react';
import GlareCard from './GlareCard';

const Projects = () => {
  return (
    <GlareCard title="Projects">
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-semibold">VibeOut (Emotion-Based Fitness App):</span> 
          Developed an application that analyzes users' emotions through facial expression detection and suggests tailored workout routines. 
          <a href="https://vibeout-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> View Project</a>
        </li>
        <li>
          <span className="font-semibold">Stranded Game:</span> 
          Created a game that tracks user IP addresses and enhances player engagement through competitive features. 
          <a href="https://os-project-p4gchfbc0-krish-kumars-projects-cfa5e03c.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> View Project</a>
        </li>
      </ul>
    </GlareCard>
  );
};

export default Projects;
