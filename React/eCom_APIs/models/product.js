const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    featured: { type: Boolean, required: false },
    rating: { type: Number, default: 4.3 },
    createdAt: { type: Date, default: Date.now(), },
    category: { type: String, required: true, },
    colors: { type: Array, required: false, },
    image: { type: String, required: true },
    description: { type: String, required: false, },
    company: { type: String, enum: { values: ["apple", "samsung", "dell", "mi", "nokia", "asus", "lenova", "rolex"], message: `{VALUE} is not supported` }, }
});

// const existingData = db.users.findOne({ name: newData.name });
// if (existingData) {
//   console.log("Data with this name already exists");
// } else {
//   db.users.insertOne(newData);
//   console.log("Data inserted successfully");
// }

module.exports = mongoose.model("Product", productSchema);