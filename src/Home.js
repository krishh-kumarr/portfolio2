import React from 'react';
import profileImage from './assets/profile.jpg'; // Update with your actual image path
import { FlipWords } from './ui/flip-words'; // Ensure this path is correct
import Typewriter from 'react-typewriter-effect'; // Import the typewriter effect
import codingGif from './assets/coding.gif'; // Add your GIFs
import teamWorkGif from './assets/teamwork.gif';
import learningGif from './assets/learning.gif';

const Home = () => {
    const roles = [
        "Aspiring Computer Science Student", 
        "Innovative Developer", 
        "Tech Enthusiast", 
        "Hackathon Winner", 
        "Problem Solver", 
        "Team Collaborator", 
        "AI and Machine Learning Enthusiast", 
        "Full-Stack Developer", 
        "Open Source Contributor", 
        "Creative Thinker"
      ];
      
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full mr-8 border-4 border-purple-500 shadow-lg shadow-purple-500/50"
        />
        <div>
          <h1 className="text-5xl font-bold mb-3 text-pastelBlue font-poppins">
            Krish Kumar
          </h1>
          <p className="text-2xl mb-2 text-pastelYellow font-poppins">
            <FlipWords words={roles} />
          </p>
          <p className="mb-2 text-gray-300 font-poppins">
            krishneerajkumar@gmail.com | +91-9016246949
          </p>
          <p className="text-xl mt-4 font-semibold text-pastelGreen font-poppins">
            Welcome to my portfolio! Here, you will find my projects and skills as I embark on my journey in technology.
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-pastelPurple font-poppins">
          What can you expect?
        </h2>

        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="text-lg leading-relaxed text-gray-300 font-poppins md:w-2/3">
            <Typewriter
              text="My journey into technology started with a deep curiosity about how things work. This fascination has blossomed into a commitment to leveraging the latest technologies to solve real-world problems. I believe in the transformative power of technology and am dedicated to creating solutions that make a meaningful difference in people's lives."
              cursor={{ show: true, blink: true }}
              typeSpeed={10} // Increased speed of typing
              delay={3000}
            />
          </div>
          <img
            src={codingGif}
            alt="Coding"
            className="w-1/3 h-auto rounded-md shadow-md mt-4 md:mt-0 md:ml-6"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="text-lg leading-relaxed text-gray-300 font-poppins md:w-2/3">
            <Typewriter
              text="Collaboration is at the core of my work. I thrive in team settings where diverse perspectives drive innovative solutions. Through my academic and project experiences, I’ve honed my software development and problem-solving skills while addressing pressing challenges."
              cursor={{ show: true, blink: true }}
              typeSpeed={25}
              delay={3000}
            />
          </div>
          <img
            src={teamWorkGif}
            alt="Teamwork"
            className="w-1/3 h-auto rounded-md shadow-md mt-4 md:mt-0 md:ml-6"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="text-lg leading-relaxed text-gray-300 font-poppins md:w-2/3">
            <Typewriter
              text="Continuous learning fuels my passion for growth. I actively seek out opportunities to enhance my skills through online courses, workshops, and hackathons. Each new skill encourages me to think creatively and tackle complex issues."
              cursor={{ show: true, blink: true }}
              typeSpeed={30}
              delay={3000}
            />
          </div>
          <img
            src={learningGif}
            alt="Learning"
            className="w-1/3 h-auto rounded-md shadow-md mt-4 md:mt-0 md:ml-6"
          />
        </div>

        <div className="text-lg mb-4 leading-relaxed text-gray-300 font-poppins">
          <Typewriter
            text="I am committed to developing impactful software that resonates with users. As I navigate my path in computer science, I aim to contribute to projects that empower individuals and foster positive change in society. Each line of code is crafted with the intention to inspire and create a better future for all."
            cursor={{ show: true, blink: true }}
            typeSpeed={40}
            delay={3000}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
