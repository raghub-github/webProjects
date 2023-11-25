require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 5000;
const authRoute = require('./router/auth_router');
const contactRoute = require('./router/contact_router');
const connectDB = require('./utils/db');
const errorMiddleware = require("./middlewares/error_middleware");

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    });
});
