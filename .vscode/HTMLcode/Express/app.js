const expess = require("express");
const path = require("path");
const app = expess();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', expess.static('static')); // for serving static files

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content in the internet";
    const parms = {'title': 'PubG is the best game', 'content': con};
    res.status(200).render('index.pug', parms);
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})