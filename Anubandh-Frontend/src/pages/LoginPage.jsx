import React, { useState } from "react";
import "../assets/styles/SignUpLogin.css";
import logo from "../assets/media/Logo.png";
import ThreeDEarth from "../components/ThreedEarth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" }); // Reset error for that field
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Invalid email format.";
      case "password":
        return value.length >= 8 ? "" : "Password must be at least 8 characters.";
      case "role":
        return value ? "" : "Please select a role.";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate each field
    const newErrors = {};
    for (const field in formData) {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Log formData (or send it to the backend)
    console.log("Form Submitted:", formData);
    alert("Logged in successfully!");

    // Reset form after submission
    setFormData({ email: "", password: "", role: "" });
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
          <h2>Log In</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}

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
          </select>
          {errors.role && <span className="error">{errors.role}</span>}

          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
