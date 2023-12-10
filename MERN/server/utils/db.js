const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connection established");
    } catch (error) {
        console.error("MongoDB connection unsuccessful", error);
        process.exit(0);
    }
};

module.exports = connectDB;