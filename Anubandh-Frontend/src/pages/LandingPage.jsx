import React from "react";
import "../assets/styles/LandingPage.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const handleLoginClick = () => {
    console.log("Login button clicked");
  };

  const handleSignUpClick = () => {
    console.log("Sign up button clicked");
  };

  return (
    <div className="centered-container">
      <div>
        <Link to="/login"><button onClick={handleLoginClick}>Login</button></Link>
        <Link to="/signup"><button onClick={handleSignUpClick}>Sign Up</button></Link>
      </div>
    </div>
  );
};

export default LandingPage;
