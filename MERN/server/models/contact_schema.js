const { Schema, model } = require('mongoose');
// const moment = require('moment-timezone');

const contactSchema = new Schema({
    username: { required: true, type: String },
    email: { required: true, type: String },
    message: { required: true, type: String },
    // date: {
    //     required: true,
    //     type: Date,
    //     default: () => moment().tz('Asia/Kolkata').format(),
    // },
    date: { required: true, type: Date,  default: () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true }), },

});

const Contact = new model("Contact", contactSchema);
module.exports = Contact;