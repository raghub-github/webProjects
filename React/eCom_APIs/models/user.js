const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    mobile:{type: Number, required: false},
    address: {type: String, required: false},
    cartItem:{ type: Object, required:false}
});

// const existingData = db.users.findOne({ name: newData.name });
// if (existingData) {
//   console.log("Data with this name already exists");
// } else {
//   db.users.insertOne(newData);
//   console.log("Data inserted successfully");
// }

module.exports = mongoose.model("User", userSchema);