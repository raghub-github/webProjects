require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const product_routs = require('./routers/products');
const connectDB = require('./db/connect');

app.get('/', (req, res) => {
    res.send("Hii !!");
});
app.use("/api/products", product_routs);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        // console.log(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Yes I am connected on port ${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
}

start();