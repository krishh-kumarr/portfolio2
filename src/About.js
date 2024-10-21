import React from 'react';
import GlareCard from './GlareCard'; // Adjust the import path as necessary
import { BackgroundGradient } from './ui/background-gradient'; // Import BackgroundGradient

const About = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <BackgroundGradient className="p-4 mb-4"> {/* Wrap with BackgroundGradient */}
        <GlareCard title="About Me" className="text-white"> {/* Set font color for the GlareCard */}
          <p className="text-gray-200">Hi! I'm <span className="text-blue-400">Krish Kumar</span>, a passionate and driven Computer Science student currently pursuing my BTech at SRM University. My journey into technology started early, and since then, I've been captivated by the power of coding to solve real-world problems.</p>
          <p className="text-gray-200">As an aspiring developer, my goal is to innovate and bring change through creative, efficient solutions. Whether it's working on web applications, mobile development, or exploring new fields like <span className="text-blue-400">AI</span> and <span className="text-blue-400">blockchain</span>, I'm always eager to learn and push the boundaries of what's possible.</p>
          <p className="text-gray-200">Here’s a bit more about me:</p>
          <ul className="list-disc ml-5 text-gray-300">
            <li>🚀 <strong>Web Development:</strong> I specialize in building responsive, user-friendly web applications using <span className="text-blue-400">React</span>, JavaScript, and Tailwind CSS.</li>
            <li>📱 <strong>Mobile Development:</strong> Currently exploring Android app development with a focus on user experience and performance.</li>
            <li>🌟 <strong>Problem-Solving:</strong> I've participated and won hackathons where my team and I brainstormed innovative ideas in areas like <span className="text-blue-400">Open Innovation</span> and Smart Tech.</li>
            <li>🎓 <strong>Lifelong Learner:</strong> With certifications in <span className="text-blue-400">Python</span>, C++, and Java, I continually upgrade my skills to stay ahead in the fast-paced world of tech.</li>
            <li>💡 <strong>Entrepreneurial Spirit:</strong> I'm driven by a desire to launch my own startup, where I can lead from the front as the CEO and create tech-based solutions to improve society.</li>
            <li>🌌 <strong>Astronomy Enthusiast:</strong> I have a deep love for stargazing and keeping up with the latest discoveries in physics and space exploration.</li>
          </ul>
        </GlareCard>
      </BackgroundGradient>

      <BackgroundGradient className="p-4"> {/* Wrap with BackgroundGradient */}
        <GlareCard title="Contact Me" className="text-white"> {/* Set font color for the GlareCard */}
          <p className="text-gray-200">I'm always open to connect with like-minded individuals and explore new opportunities. Feel free to reach out!</p>
          <p className="text-gray-200">Email: <a href="mailto:krishneerajkumar@gmail.com" className="text-blue-300 hover:underline">krishneerajkumar@gmail.com</a></p>
          <p className="text-gray-200">Phone: <a href="tel:+919016246949" className="text-blue-300 hover:underline">+91-9016246949</a></p>
          <p className="text-gray-200">LinkedIn: <a href="https://linkedin.com/in/krish-kumar" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/krish-kumar</a></p>
          <p className="text-gray-200">GitHub: <a href="https://github.com/krishh-kumarr" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">github.com/krishh-kumarr</a></p>
        </GlareCard>
      </BackgroundGradient>
    </div>
  );
};

export default About;
