const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to User model
        required: true
    },
    category: {
        type: String // news, achievement, update
    },
    college: {
        type: String,
        required: true    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Feed = mongoose.model("Feed", feedSchema);

module.exports = Feed;
