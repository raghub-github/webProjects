const express = require("express");
const path = require("path");
const { Console, log } = require("console");
const app = express();
// const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;
require("./db/conn.js");
const Feedback = require("./models/feedback.js");
var http = require('http');
var fs = require('fs');

const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.get("/", (req, res) => {
//     res.render("index");
// });

app.get("/feedback", (req, res) => {
    res.render("feedback");
});

app.post("/feedback", async (req, res) => {
    try {
        // console.log(req.body.fullName);
        // res.redirect('index');
        const feedbackdata = new Feedback({
            fullName: req.body.fullName,
            mobile: req.body.mobile,
            email: req.body.email,
            station_name: req.body.station_name,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            address: req.body.address,
            longitude: req.body.longitude,
            lattitude: req.body.lattitude,
            contact: req.body.contact,
            pricing: req.body.pricing,
            quary: req.body.quary
        })
        const fdata = await feedbackdata.save();
        res.status(201).render("index");
        // res.send("Data saved successfully");
        // res.status(201).render("./public/index.html");
        
    } catch (error) {
        res.status(400).send(error);
    }
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});