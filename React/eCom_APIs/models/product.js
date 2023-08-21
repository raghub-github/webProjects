const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    price: { type: Number, required: true },
    featured: { type: Boolean, required: false },
    rating: { type: Number, default: 4.4 },
    createdAt: { type: Date, default: Date.now(), },
    category: { type: String, required: true, },
    colors: { type: Object, required: false, },
    description: { type: String, required: false, },
    company: { type: String, enum: { values: ["apple", "samsung", "dell", "mi", "nokia", "asus", "lenova", "rolex"], message: `{VALUE} is not supported` }, }
});

module.exports = mongoose.model("Product", productSchema);