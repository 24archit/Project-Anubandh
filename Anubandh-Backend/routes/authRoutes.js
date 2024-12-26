const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const User = require("../models/user");
const College = require("../models/college");
const JWT_SECRET = process.env.JWT_SECRET;

// Signup Route
router.post("/signup", async (req, res) => {
  const {
    name,
    email,
    password,
    role,
    college,
    batch,
    address,
    state,
    pincode,
  } = req.body;

  try {
    // Validation
    if (!email || !password || !name || !role) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide all required fields." });
    }

    if (role === "college") {
      // College Signup
      let existingCollege = await College.findOne({ email });
      if (existingCollege) {
        return res.status(400).json({
          success: false,
          error: "Email already registered as a college.",
        });
      }
      // Testing without hashing password
      //const hashedPassword = await bcrypt.hash(password, 10);
      const hashedPassword = password;
      const newCollege = await College.create({
        name,
        address,
        state,
        pincode,
        email,
        adminPassword: hashedPassword,
      });

      const payload = {
        user: { id: newCollege._id, name: newCollege.name, type: "college" },
      };
      const authtoken = JWT.sign(payload, JWT_SECRET);

      return res.status(200).json({
        success: true,
        authtoken,
      });
    } else if (role === "alumni") {
      // Student or Alumni Signup
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, error: "Email already registered." });
      }

      const userCollege = await College.findOne({ name: college });
      if (!userCollege) {
        return res
          .status(404)
          .json({ success: false, error: "College not found." });
      }
      // Testing without hashing password
      //const hashedPassword = await bcrypt.hash(password, 10);
      const hashedPassword = password;
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        college: userCollege._id,
        batch,
      });

      const payload = {
        user: {
          id: newUser._id,
          name: newUser.name,
          type: "alumni",
        },
      };
      const authtoken = JWT.sign(payload, JWT_SECRET);

      return res.status(200).json({
        success: true,
        authtoken,
      });
    }
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        error: "Please provide email, password, and role.",
      });
    }

    if (role === "college") {
      // College Login
      let user = await College.findOne({ email });
      if (!user) {
        return res.status(401).json({
          success: false,
          error: "Invalid email or not registered as a college.",
        });
      }
      // Testing without hashing password
      // const isPasswordMatch = await bcrypt.compare(
      //   password,
      //   user.adminPassword
      // );

      const isPasswordMatch = password === user.adminPassword;
      if (!isPasswordMatch) {
        return res
          .status(402)
          .json({ success: false, error: "Invalid password." });
      }
      const payload = {
        user: { id: user._id, name: user.name, type: "college" },
      };
      const authtoken = JWT.sign(payload, JWT_SECRET);

      return res.status(200).json({ success: true, authtoken });
    } else if (role === "alumni") {
      // Alumni Login
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          success: false,
          error: "Invalid email or not registered as a user.",
        });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res
          .status(402)
          .json({ success: false, error: "Invalid password." });
      }
      const payload = {
        user: {
          id: user._id,
          name: user.name,
          type: "alumni",
        },
      };
      const authtoken = JWT.sign(payload, JWT_SECRET);
      return res.status(200).json({ success: true, authtoken });
    }
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
});

// Verify Token Route
router.get("/verifyauthtoken", (req, res) => {

  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const verified = JWT.verify(token, JWT_SECRET);
    req.user = verified.user;
    return res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid JWT Token." });
  }
});

router.get("/collegelist", async (req, res) => {
  const state = req.query.state;
  try {
    const colleges = await College.find({state: state}, "name");
    return res.status(200).json({ success: true, colleges });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
