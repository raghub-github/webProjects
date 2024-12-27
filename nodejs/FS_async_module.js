const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'AsyncText.txt');

// Create a file
fs.writeFile(filepath, 'Hello from Node.js', 'utf-8', (err) => {
    if (err) throw err;
    console.log('File created');
});

// Read the file
fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Update the file
fs.appendFile(filepath, ' Updated', 'utf-8', (err) => {
    if (err) throw err;
    console.log('File updated');
});

// Delete the file
fs.unlink(filepath, (err) => {
    if (err) throw err;
    console.log('File deleted');
});

// Rename the file
fs.rename(filepath, 'AsyncNewText.txt', (err) => {
    if (err) throw err;
    console.log('File renamed');
});