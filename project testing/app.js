const express = require("express");
const path = require("path");
const { Console } = require("console");
const { default: mongoose } = require("mongoose");
const app = express();
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/contactDance', { useNewUrlParser: true });
const port = 8000;

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    address: String,
    city: String,
    availability: String,
    contact: String,
    isValidated: String,
    issue: String,
    lattitude: String,
    longitude: String,
    name: String,
    notes: String,
    phones: String,
    pincode: String,
    pricing: String,
    state: String,
    stationid: String,
    type: String
});
const contact = mongoose.model('contact', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const parms = {};
    res.status(200).render('home.pug', parms);
});

app.get('/contact', (req, res)=>{
    const parms = {};
    res.status(200).render('contact.pug', parms);
});

app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database");
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database");
    });
    // res.status(200).render('contact.pug');
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});