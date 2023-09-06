require('dotenv').config();
const connectDB = require('./db/connect');
const product = require('./models/product');
const user = require('./models/user');
const productJSON = require('./products.json');
const userData = require('./userData.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        // const existingData = db.users.findMany({ name: productJSON.name });
        // if (existingData) {
        //   console.log("Data with this name already exists");
        // } else {
        //   db.product.insertOne(productJSON);
        //   console.log("Data inserted successfully");
        // }
        await product.deleteMany();
        await user.deleteMany();
        await product.create(productJSON);
        await user.create(userData);
        console.log("db created successfully");
    } catch (error) {
        console.log(error.message);
    }
}

start();
