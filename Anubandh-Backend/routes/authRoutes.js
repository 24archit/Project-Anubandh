const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const User = require("../models/user");
const College = require("../models/college");
const JWT_SECRET = process.env.JWT_SECRET;

// Signup Route
router.post("/signup", async (req, res) => {
    const { name, email, password, role, college, batch, address, state, pincode } = req.body;
    
    try {
        // Validation
        if (!email || !password || !name || !role) {
            return res.status(400).json({ success: false, error: "Please provide all required fields." });
        }

        if (role === "college") {
            // College Signup
            let existingCollege = await College.findOne({ email });
            if (existingCollege) {
                return res.status(400).json({ success: false, error: "Email already registered as a college." });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newCollege = await College.create({
                name,
                address,
                state,
                pincode,
                email,
                adminPassword: hashedPassword, // Fix: Store as adminPassword
            });

            const payload = {
                user: { _id: newCollege._id, name: newCollege.name },
            };
            const authtoken = JWT.sign(payload, JWT_SECRET);

            return res.status(201).json({
                success: true,
                user: { id: newCollege._id, name: newCollege.name, email: newCollege.email },
                authtoken,
            });
        } else {
            // Student or Alumni Signup
            let existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ success: false, error: "Email already registered." });
            }

            const userCollege = await College.findOne({ name: college });
            if (!userCollege) {
                return res.status(404).json({ success: false, error: "College not found." });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                name,
                email,
                password: hashedPassword,
                role,
                college: userCollege._id,
                batch,
            });

            const payload = {
                user: { _id: newUser._id, name: newUser.name, collegeId: userCollege._id },
            };
            const authtoken = JWT.sign(payload, JWT_SECRET);

            return res.status(201).json({
                success: true,
                user: { id: newUser._id, name: newUser.name, email: newUser.email, collegeId: userCollege._id },
                authtoken,
            });
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password, role } = req.body;

    try {
        if (!email || !password || !role) {
            return res.status(400).json({ success: false, error: "Please provide email, password, and role." });
        }

        let user;

        if (role === "college") {
            // College Login
            user = await College.findOne({ email });
            if (!user) {
                return res.status(401).json({ success: false, error: "Invalid email or not registered as a college." });
            }

            const isPasswordMatch = await bcrypt.compare(password, user.adminPassword);
            if (!isPasswordMatch) {
                return res.status(402).json({ success: false, error: "Invalid password." });
            }
        } else {
            // Student or Alumni Login
            user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ success: false, error: "Invalid email or not registered as a user." });
            }

            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                return res.status(402).json({ success: false, error: "Invalid password." });
            }
        }

        const payload = { user: { id: user._id, name: user.name } };
        const authtoken = JWT.sign(payload, JWT_SECRET);

        return res.status(200).json({ success: true, authtoken });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

module.exports = router;
