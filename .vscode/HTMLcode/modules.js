const fs = require("fs");
let text = fs.readFileSync("cd.txt", "utf-8");
text = text.replace("done", "Hurry!!");
console.log("The content of the file is : ");
console.log(text);

console.log("Creating a new file"); 
fs.writeFileSync("raghu.txt", text);
