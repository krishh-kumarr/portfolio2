import React, { useState } from 'react';
import './index.css'; // Ensure this file includes the font import and styles
import profileImage from './assets/profile.jpg'; // Update with your actual image path

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Add your animated background here if needed */}
    </div>
  );
};

// GlareCard component
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
        className="card bg-gray-800 bg-opacity-80 rounded-xl p-6 border border-gray-700 shadow-lg transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <h3
          className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          style={{ transform: 'translateZ(50px)', fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h3>
        <div className="text-gray-300" style={{ transform: 'translateZ(30px)', fontFamily: 'Poppins, sans-serif' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div className="min-h-screen text-white p-8 relative font-poppins">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src={profileImage} // Imported profile image
            alt="Profile"
            className="w-40 h-40 rounded-full mr-8 border-4 border-purple-500 shadow-lg shadow-purple-500/50"
          />
          <div>
            <h1 className="text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-poppins">
              Krish Kumar
            </h1>
            <p className="text-2xl mb-2 font-poppins">Aspiring Computer Science Student | SRM University</p>
            <p className="mb-2 font-poppins">krishneerajkumar@gmail.com | +91-9016246949</p>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://linkedin.com/in/krish-kumar-1a119728a/"
                className="text-blue-300 hover:text-purple-400 transition-colors duration-300 font-poppins"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/krishh-kumarr"
                className="text-blue-300 hover:text-purple-400 transition-colors duration-300 font-poppins"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/__krish___2005/"
                className="text-blue-300 hover:text-purple-400 transition-colors duration-300 font-poppins"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Resume Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <GlareCard title="Education">
            <p className="text-lg mb-2 font-poppins">SRM University, Kattankulathur</p>
            <p className="font-semibold mb-1 font-poppins">Bachelor of Technology in Computer Science</p>
            <p className="mb-1 font-poppins">July 2023 – Present</p>
            <p className="text-green-400 mb-2 font-poppins">GPA: 9.5/10 (First Year)</p>
            <p className="font-semibold mb-1 font-poppins">Relevant Coursework:</p>
            <ul className="list-disc list-inside">
              <li className="font-poppins">Advanced Data Structures and Algorithms</li>
              <li className="font-poppins">Object-Oriented Design Patterns</li>
              <li className="font-poppins">Operating Systems and System Programming</li>
              <li className="font-poppins">Database Management Systems</li>
              <li className="font-poppins">Computer Networks and Security</li>
            </ul>
          </GlareCard>

          {/* Experience */}
          <GlareCard title="Experience">
            <p className="text-lg mb-2 font-poppins">Web Developer</p>
            <p className="font-semibold mb-1 font-poppins">IEEE Computer Society, SRMIST - Chennai, IN</p>
            <p className="mb-1 font-poppins">January 2024 - Current</p>
            <ul className="list-disc list-inside mb-2">
              <li className="font-poppins">Collaborated with other developers on coding projects.</li>
              <li className="font-poppins">Developed web applications using HTML, CSS, JavaScript, and React.</li>
              <li className="font-poppins">Integrated design specifications into the development process for accurate execution.</li>
              <li className="font-poppins">Developed wireframes and prototypes to validate user interactions with UI elements.</li>
            </ul>
          </GlareCard>

          {/* Skills */}
          <GlareCard title="Skills">
            <ul className="list-none space-y-2">
              <li className="font-poppins">
                <span className="font-semibold">Programming Languages:</span> C, C++, Python, Java, JavaScript, TypeScript, Rust
              </li>
              <li className="font-poppins">
                <span className="font-semibold">Web Development:</span> HTML5, CSS3, React.js, Node.js, Express.js, Flask, Django, Tailwind CSS, Bootstrap
              </li>
              <li className="font-poppins">
                <span className="font-semibold">Tools & DevOps:</span> Git, GitHub, GitLab, Docker, AWS, Jupyter Notebook, Firebase
              </li>
              <li className="font-poppins">
                <span className="font-semibold">Machine Learning:</span> Scikit-learn, TensorFlow, Keras
              </li>
              <li className="font-poppins">
                <span className="font-semibold">Databases:</span> MySQL, MongoDB, PostgreSQL
              </li>
            </ul>
          </GlareCard>

          {/* Projects */}
          <GlareCard title="Projects">
            <ul className="list-disc list-inside space-y-2">
              <li className="font-poppins">
                <span className="font-semibold">VibeOut (Emotion-Based Fitness App):</span> Developed an application that analyzes users' emotions through facial expression detection and suggests tailored workout routines. 
                <a href="https://vibeout-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> View Project</a>
              </li>
              <li className="font-poppins">
                <span className="font-semibold">Stranded Game:</span> Created a game that tracks user IP addresses and enhances player engagement through competitive features. 
                <a href="https://os-project-p4gchfbc0-krish-kumars-projects-cfa5e03c.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> View Project</a>
              </li>
            </ul>
          </GlareCard>

          {/* Hobbies and Interests */}
          <GlareCard title="Hobbies & Interests">
            <ul className="list-disc list-inside space-y-2">
              <li className="font-poppins">Astronomy and Stargazing</li>
              <li className="font-poppins">Researching New Discoveries</li>
              <li className="font-poppins">Playing Video Games</li>
            </ul>
          </GlareCard>
        </div>
      </div>
    </div>
  );
};

export default App;
