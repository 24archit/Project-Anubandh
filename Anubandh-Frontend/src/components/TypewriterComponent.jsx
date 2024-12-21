import React from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import '../assets/styles/TypewriterComponent.css'; // For custom styles

const TypewriterComponent = () => {
  React.useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Your Next Career Move Starts Here,', 'With Your Alumni Connections.'],
      autoStart: true,
      loop: true,  // Keep the typing effect looping
      deleteSpeed: 60,  // Speed of deletion
      delay: 75, // Typing speed
      pauseFor: 2000, // Pause between strings
      cursor: '|', // Custom cursor
    });
  }, []);

  return (
    <div className="typewriter-container fade-in">
      <span className="static-text">Discover Opportunities:</span> {/* Static Text */}
      <br></br>
      <span id="typewriter"></span>
    </div>
  );
};

export default TypewriterComponent;
