const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'text.txt');

// Create a file
fs.writeFileSync(filepath, 'Hello from Node.js', 'utf-8');

// Read the file
const readfile = fs.readFileSync(filepath, 'utf-8');
console.log(readfile);

// Update the file
fs.appendFileSync(filepath, ' Updated', 'utf-8');

// Delete the file
fs.unlinkSync(filepath);

// Rename the file
fs.renameSync(filepath, 'newfile.txt');