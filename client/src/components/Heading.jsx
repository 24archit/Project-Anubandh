import React from 'react';
import '../assets/styles/TypewriterComponent.css'; // For custom styles

const TypewriterComponent = (props) => {


  return (
    <div className="typewriter-container fade-in">
      <span className="static-text">{props.heading}</span> {/* Static Text */}
    </div>
  );
};

export default TypewriterComponent;
