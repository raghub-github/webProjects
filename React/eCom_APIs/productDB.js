require('dotenv').config();
const connectDB = require('./db/connect');
const product = require('./models/product');
const productJSON = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await product.deleteMany()
        await product.create(productJSON);
        console.log("db created successfully");
    } catch (error) {
        console.log(error.message);
    }
}

start();
