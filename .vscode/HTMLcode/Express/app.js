const expess = require("express");
const path = require("path");
const app = expess();
const port = 3001;

// for serving static files
app.use('/static', expess.static('static'));

// set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname, 'views'));

// our pug demo endpoint 
app.get("/demo",(req, res)=>{
    res.status(200).render('demo', {title: 'Hey', massage: 'Hello There!'});
})

app.get("/",(req, res)=>{
    res.status(200).send("This is Homepage of my first express app");
})

app.get("/about",(req, res)=>{
    res.send("This is AboutPage of my first express app");
})

app.post("/about",(req, res)=>{
    res.send("This is AboutPage for post request of my first express app");
})

app.get("/this",(req, res)=>{
    res.status(404).send("This page is not found");
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})