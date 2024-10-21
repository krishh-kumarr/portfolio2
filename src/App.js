import React, { useState } from 'react';
import './index.css'; // Ensure this file includes the font import and styles
import Home from './Home';      // Import Home component
import About from './About';    // Import About component
import Skillset from './Skillset'; // Import Skillset component
import Hobbies from './Hobbies'; // Import Hobbies component
import Projects from './Projects'; // Import Projects component

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen text-white p-8 relative font-poppins">
      <header className="flex justify-between items-center mb-12">
        <h1
          className="text-4xl font-bold cursor-pointer text-blue-300 transition-colors duration-300"
          onClick={() => handleNavigation('home')}
        >
          Krish Kumar
        </h1>
        <nav className="space-x-4">
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'home' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </button>
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'about' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </button>
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'skillset' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('skillset')}
          >
            Skillset
          </button>
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'hobbies' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('hobbies')}
          >
            Hobbies
          </button>
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'projects' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </button>
        </nav>
      </header>

      <main>
        {currentSection === 'home' && <Home />}
        {currentSection === 'about' && <About />}
        {currentSection === 'skillset' && <Skillset />}
        {currentSection === 'hobbies' && <Hobbies />}
        {currentSection === 'projects' && <Projects />}
      </main>

      {/* Navigation Links Section */}
      <footer className="mt-12">
        <h2 className="text-2xl font-bold">Navigate</h2>
        <nav className="space-x-4 mt-4">
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'home' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </button>
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'about' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </button>
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'skillset' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('skillset')}
          >
            Skillset
          </button>
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'hobbies' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('hobbies')}
          >
            Hobbies
          </button>
          <button
            className={`px-4 py-2 rounded-md text-blue-300 border-2 border-blue-300 transition-transform duration-300 transform-gpu hover:-translate-y-1 active:translate-y-1 hover:shadow-3xl ${currentSection === 'projects' ? 'font-bold' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default App; 