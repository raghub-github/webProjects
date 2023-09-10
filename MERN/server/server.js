require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 5000;
const router = require('./router/auth_router');
const connectDB = require('./utils/db');

app.use(express.json());
app.use('/api/auth', router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    });
});
