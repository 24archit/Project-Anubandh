import React, { useState } from "react";
import "../assets/styles/SignUp.css";
import logo from "../assets/media/Logo.png";
import ThreeDEarth from "../components/ThreedEarth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!formData.email || !formData.password || !formData.role ) {
      alert("Please fill in all required fields!");
      return;
    }

    // Log formData (or send it to the backend)
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="signup-container">
      <div className="left-side">
        <div className="three-d-world">
          <ThreeDEarth />
        </div>
      </div>
      <div className="right-side">
        <img src={logo} alt="Logo" className="logo" />
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Log In </h2>
          
        
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
         
          <select
            name="role"
            className="input-field"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Role</option>
            <option value="college">College</option>
            <option value="alumni">Alumni</option>
            <option value="student">Student</option>
          </select>

         

          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
