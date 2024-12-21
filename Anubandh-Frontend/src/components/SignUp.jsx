import React, { useState } from "react";
import "../assets/styles/SignUp.css";
import logo from "../assets/media/Logo.png";
import ThreeDEarth from "./ThreedEarth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    role: "",
    batch: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation logic
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.username || !formData.email || !formData.password || !formData.role || !formData.college || (formData.role !== "college" && !formData.batch)) {
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
          <h2>Sign Up To Get Started!</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
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

          {/* Conditional rendering based on role */}
          {formData.role === "college" ? (
            <input
              type="text"
              name="college"
              placeholder="Enter College Name"
              value={formData.college}
              onChange={handleChange}
              className="input-field"
              required
            />
          ) : (
            <select
              name="college"
              className="input-field"
              value={formData.college}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Your College</option>
              <option value="collegeA">College A</option>
              <option value="collegeB">College B</option>
              <option value="collegeC">College C</option>
            </select>
          )}

          {/* Passout Year input field is conditionally rendered */}
          {formData.role !== "college" && (
            <input
              type="number"
              name="batch"
              placeholder="Passout Year"
              value={formData.batch}
              onChange={handleChange}
              className="input-field"
              min="1900"
              max="2100"
              required
            />
          )}
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
