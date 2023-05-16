const express = require("express");
const path = require("path");
const { Console, log } = require("console");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;

const { default: mongoose } = require("mongoose");
require("./db/conn.js");

// const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    fullName: { type: String },
    mobile: { type: Number },
    email: { type: String },
    station_name: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number },
    address: { type: String },
    longitude: { type: Number },
    lattitude: { type: Number },
    contact: { type: Number },
    pricing: { type: String },
    quary: { type: String }
});
const feedback = new mongoose.model("feedback", feedbackSchema);
// module.exports = Feedback;

// const Feedback = require("./models/feedback.js");
// var http = require('http');
// var fs = require('fs');

const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/static', express.static('static')); // for serving static files
// app.use(express.urlencoded());

//PUG SPECIFIC STUFF
// app.set('view engine', 'html');  // set the template engine as pug
// const staticpath1 =  path.join(__dirname, './views'); // set the views directory
// app.use(express.static(staticpath1));



app.get('/', (req, res) => {
    const parms = {};
    res.status(200).render('index.html', parms);
});

app.get('/feedback', (req, res) => {
    const parms = {};
    res.status(200).render('feedback.html', parms);
});

app.post('/feedback', (req, res) => {
    var myData = new feedback(req.body);
    myData.save().then(() => {
        res.send("Data saved successfully to the database");
    }).catch(() => {
        res.status(400).render("Ohh!, Data is not saved to the database");
    });
    // res.status(200).render('./views');
});

// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.get("/feedback", (req, res) => {
//     res.render("feedback");
// });

// app.post("/feedback", async (req, res) => {
//     try {
//         // console.log(req.body.fullName);
//         // res.redirect('index');
//         const feedbackdata = new Feedback({
//             fullName: req.body.fullName,
//             mobile: req.body.mobile,
//             email: req.body.email,
//             station_name: req.body.station_name,
//             city: req.body.city,
//             state: req.body.state,
//             zip: req.body.zip,
//             address: req.body.address,
//             longitude: req.body.longitude,
//             lattitude: req.body.lattitude,
//             contact: req.body.contact,
//             pricing: req.body.pricing,
//             quary: req.body.quary
//         })
//         const fdata = await feedbackdata.save();
//         res.status(201).render("index");
//         // res.send("Data saved successfully");
//         // res.status(201).render("./public/index.html");

//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});