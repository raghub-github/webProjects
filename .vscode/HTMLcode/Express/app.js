const expess = require("express");
const path = require("path");
const fs = require("fs");
const app = expess();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', expess.static('static')); // for serving static files
app.use(expess.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content in the internet";
    const parms = {'title': 'PubG is the best game', 'content': con};
    res.status(200).render('index.pug', parms);
})

app.post('/', (req, res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputToWrite = 'The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her : ${more}';
    fs.writeFileSync('output.txt', outputToWrite);
    // console.log(req.body);
    const parms = {'massage': 'Your form has been submitted successfully'};
    res.status(200).render('index.pug', parms);
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})