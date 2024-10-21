import React, { useState, useEffect } from 'react';

const FlipWords = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words]);

  return (
    <span className="text-purple-500 font-bold">
      {words[currentWordIndex]}
    </span>
  );
};

export { FlipWords };
