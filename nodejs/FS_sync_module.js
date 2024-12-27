const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'text.txt');

// Create a file
const writefile = fs.writeFileSync(filepath, 'Hello from Node.js', 'utf-8');

// Read the file
const readfile = fs.readFileSync(filepath, 'utf-8');
console.log(readfile);

// Update the file
const updatefile = fs.appendFileSync(filepath, ' Updated', 'utf-8');

// Delete the file
const deletefile = fs.unlinkSync(filepath);

// Rename the file
const renamefile = fs.renameSync(filepath, 'newfile.txt');