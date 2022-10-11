const expess = require("express");
const app = expess();
const port = 3001;
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