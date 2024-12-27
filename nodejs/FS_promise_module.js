const fs = require('fs').promises;
const path = require('path');

const filepath = path.join(__dirname, 'PromiseText.txt');

// Create a file
fs.writeFile(filepath, 'Hello from Node.js', 'utf-8')
    .then(() => console.log('File created'))
    .catch((err) => console.log(err));

// Read the file
fs.readFile(filepath, 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    
// update the data
fs.appendFile(filepath, ' Updated', 'utf-8')
    .then(() => console.log('File updated'))
    .catch((err) => console.log(err));
    
// Delete the file
fs.unlink(filepath)
    .then(() => console.log('File deleted'))
    .catch((err) => console.log(err));   

// Rename the file
fs.rename(filepath, 'PromiseNewText.txt')
    .then(() => console.log('File renamed'))
    .catch((err) => console.log(err));    