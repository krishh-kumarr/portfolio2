import React from 'react';
import GlareCard from './GlareCard';
import { Telescope, Search, Gamepad, Book, Cpu, Dumbbell, Camera } from 'lucide-react'; // Import icons

const Hobbies = () => {
  return (
    <GlareCard title="Hobbies & Interests">
      <ul className="list-disc list-inside space-y-2">
        <li className="flex items-center">
          <Telescope className="mr-2 text-yellow-400" />
          <span>Astronomy and Stargazing</span>
        </li>
        <li className="flex items-center">
          <Search className="mr-2 text-blue-400" />
          <span>Researching New Discoveries</span>
        </li>
        <li className="flex items-center">
          <Gamepad className="mr-2 text-green-400" />
          <span>Playing Video Games</span>
        </li>
        <li className="flex items-center">
          <Book className="mr-2 text-purple-400" />
          <span>Reading Sci-Fi Novels</span>
        </li>
        <li className="flex items-center">
          <Cpu className="mr-2 text-red-400" />
          <span>Exploring Artificial Intelligence and Machine Learning</span>
        </li>
        <li className="flex items-center">
          <Dumbbell className="mr-2 text-orange-400" />
          <span>Fitness and Workout Routines</span>
        </li>
        <li className="flex items-center">
          <Camera className="mr-2 text-teal-400" />
          <span>Photography and Capturing Nature</span>
        </li>
      </ul>
    </GlareCard>
  );
};

export default Hobbies;
