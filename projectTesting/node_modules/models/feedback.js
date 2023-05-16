const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    fullName: {
         type: String
        // required: true
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    station_name: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: Number
    },
    address: {
        type: String
    },
    longitude: {
        type: Number
    },
    lattitude: {
        type: Number
    },
    contact: {
        type: Number
    },
    pricing: {
        type: String
    },
    quary: {
        type: String
    }
});

const Feedback = new mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;