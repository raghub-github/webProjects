require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 5000;
const authRoute = require('./router/auth_router');
const contactRoute = require('./router/contact_router');
const serviceRoute = require('./router/service_router');
const connectDB = require('./utils/db');
const errorMiddleware = require("./middlewares/error_middleware");
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD",
    credentials:true,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/data', serviceRoute);
app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    });
});
