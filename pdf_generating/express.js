const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  console.log(req.query);
  res.sendFile(path.join(__dirname, '/template.html'));
//   res.send("About");
});
app.get("/Contact", (req, res) => {
  res.send("Contact");
});
app.get("/map", (req, res) => {
  res.send("Map");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// const regex = "" // this is not change all the accurance in the text string
// const regex = /very/g
// const text = "Raghu is a very good boy very helpfull very black very perfect boy"
// // console.log(text.replace("very", "VERY"))
// console.log(text.replace(regex, "VERY"))
