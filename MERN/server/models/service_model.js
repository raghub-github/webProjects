const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
    service: { required: true, type: String },
    description: { required: true, type: String },
    price: { required: true, type: String },
    provider: { required: true, type: String }
});

const Service = new model("Service", serviceSchema);
module.exports = Service;