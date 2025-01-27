import React, { useEffect, useState } from "react";
import "../assets/styles/SignUpLogin.css";
import logo from "../assets/media/Logo.png";
import ThreeDEarth from "../assets/media/3d-earth.png";
import { getSignUp, getCollegeList } from "../apis/authApi";

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
  const initialFormData = {
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
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("");
  const [collegeList, setCollegeList] = useState([]);

  useEffect(() => {
    if (state) {
      const fetchCollegeList = async () => {
        const data = await getCollegeList(state);
        setCollegeList(data.colleges);
      };
      fetchCollegeList();
    }
  }, [state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "state") {
      setState(e.target.value);
      setFormData({ ...formData, college: "" });
    }
    setErrors({ ...errors, [e.target.name]: "" }); // Reset error for that field
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Invalid email format.";
      case "password":
        return value.length >= 8
          ? ""
          : "Password must be at least 8 characters.";
      case "confirmPassword":
        return value !== formData.password ? "Passwords do not match." : "";
      default:
        return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initial validation check for empty fields
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    if (
      formData.role === "college" &&
      (!formData.address || !formData.state || !formData.pincode)
    ) {
      newErrors.address = "Please fill in all required fields for College!";
    }

    if (formData.role !== "college" && (!formData.batch || !formData.college)) {
      newErrors.batch =
        "Please fill in all required fields for Students/Alumni!";
    }

    // Email, password, confirmPassword validation
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
    try {
      await getSignUp(formData);
      window.location.href = "/";
    } catch (error) {
      alert("Error during signup. Please try again.");
      console.error("Error during signup:", error);
    }

    // Reset form after submission
    setFormData(initialFormData);
  };

  return (
    <div className="signup-container">
      <div className="left-side">
        <div className="visual-text">
          <img src={ThreeDEarth}></img>
          <h1>"Your Alumni Network Awaits..."</h1>
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
                name="name"
                placeholder="College Name"
                value={formData.name}
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
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
              <select
                name="state"
                className="input-field"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select College State
                </option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && <span className="error">{errors.state}</span>}
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
              {errors.name && <span className="error">{errors.name}</span>}
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
              {errors.state && <span className="error">{errors.state}</span>}
              <select
                name="college"
                className="input-field"
                value={formData.college}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Your College (select state first)
                </option>
                {collegeList.map((college, college_id) => (
                  <option key={college_id} value={college.name}>
                    {college.name}
                  </option>
                ))}
              </select>
              {errors.college && (
                <span className="error">{errors.college}</span>
              )}
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
              {errors.batch && <span className="error">{errors.batch}</span>}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input-field"
            required
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
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
