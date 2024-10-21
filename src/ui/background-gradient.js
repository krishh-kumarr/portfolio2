import React from 'react';

const BackgroundGradient = ({ children, className }) => {
  return (
    <div className={`border-4 border-transparent p-4 ${className} bg-transparent`}>
      {children}
    </div>
  );
};

export { BackgroundGradient };
