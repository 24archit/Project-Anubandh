const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    adminPassword: {
        type: String,
        required: true 
    },
    studentDatabase: [
        {
            name: {
                type: String,
                required: true
            },
            aadharNumber: {
                type: String,
                required: true,
                unique: true
            },
            batch: {
                type: Number,
                required: true 
            },
            email: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
