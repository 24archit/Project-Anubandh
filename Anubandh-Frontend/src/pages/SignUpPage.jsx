import React, { useState } from "react";
import "../assets/styles/SignUp.css";
import logo from "../assets/media/Logo.png";
import ThreeDEarth from "../components/ThreedEarth";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    college: "",
    address: "",
    state: "",
    pincode: "",
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

    if (
      formData.role === "college" &&
      (!formData.address || !formData.state || !formData.pincode)
    ) {
      alert("Please fill in all required fields for College!");
      return;
    }

    if (formData.role !== "college" && (!formData.batch || !formData.college)) {
      alert("Please fill in all required fields for Students/Alumni!");
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
          <select
            name="role"
            className="input-field"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="college">College</option>
            <option value="alumni">Alumni</option>
          </select>
          {formData.role === "college" ? (
            <>
              <input
                type="text"
                name="college"
                placeholder="College Name"
                value={formData.college}
                onChange={handleChange}
                className="input-field"
                required
              />
              <textarea
                name="address"
                placeholder="College Address"
                value={formData.address}
                onChange={handleChange}
                className="input-field"
              />
              <select
                name="state"
                className="input-field"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select State
                </option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="input-field"
                required
              />
            </>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                required
              />
              <select
                name="college"
                className="input-field"
                value={formData.college}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Your College
                </option>
                <option value="college A">College A</option>
                <option value="collegeB">College B</option>
                <option value="collegeC">College C</option>
              </select>
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
            </>
          )}

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

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
