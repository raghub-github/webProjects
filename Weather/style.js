const express = require("express");
const path = require("path");
const { Console, log } = require("console");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3001;

const static_path = path.join(__dirname, "./views");
app.use(express.static(static_path));

app.get('/', (req, res) => {
    const parms = {};
    res.status(200).render('index.html', parms);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});