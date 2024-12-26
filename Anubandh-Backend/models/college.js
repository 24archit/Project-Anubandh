const mongoose = require("mongoose");

const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
];

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
    state: {
        type: String,
        required: true,
        enum: indianStates // Restrict state to be one of the listed Indian states
    },
    pincode: {
        type: Number,
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
