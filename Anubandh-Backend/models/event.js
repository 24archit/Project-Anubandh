const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College", // Ensures event belongs to a specific college
        required: true
    },
    participants: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User" // Array of User IDs
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

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
