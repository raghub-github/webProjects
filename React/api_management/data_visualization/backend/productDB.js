require('dotenv').config();
const connectToMongo = require("./db");
const product = require('./models/data');
const productJSON = require('./products.json');

const start = async () => {
    try {
        await connectToMongo();
        await product.deleteMany();
        await product.create(productJSON);
        console.log("db created successfully");
    } catch (error) {
        console.log("DB Not Created !", error.message);
    }
}
start();
