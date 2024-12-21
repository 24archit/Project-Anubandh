const mongoose = require("mongoose");

const donation= new mongoose.Schema({
    purpose: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College", 
        required: true
    },
    steps: [
        {
            stepNumber: {
                type: Number, 
                required: true
            },
            description: {
                type: String,
                required: true
            },
            status: {
                type: String, 
                enum: ["completed", "ongoing", "left"],
                default: "left"
            }
        }
    ],
    targetAmount: {
        type: Number, 
        required: true
    },
    collectedAmount: {
        type: Number, 
        default: 0
    },
    donors: [
        {
            donor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User", 
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            donationDate: {
                type: Date,          // add transaction id and other details of psyment 
                default: Date.now 
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

const Donation = mongoose.model("DonationRequest", donation);

module.exports = Donation;
