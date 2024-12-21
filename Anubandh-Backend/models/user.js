const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        unique: true // Ensures Aadhar is unique across users
    },
    email: {
        type: String,
        required: true,
        unique: true // Email must be unique
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, // "student" or "alumni"
        required: true
    },
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College", // Links the user to a specific college
        required: true
    },
    batch: {
        type: Number,
        required: true // Graduation batch or current year
    },
    profileImage: {
        type: String
    },
    currentEmployer: {
        type: String // For alumni
    },
    skills: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
