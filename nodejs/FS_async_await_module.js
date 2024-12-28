const fs = require('fs/promises');
const path = require('path');

const filepath = path.join(__dirname, 'AsyncAwaitText.txt');

// Read folder
const readFolder = async () => {
    try {
        const data = await fs.readdir(__dirname);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFolder();

// Create a file
const createFile = async () => {
    try {
        await fs.writeFile(filepath, JSON.stringify({ message: 'Hello from Node.js' }), 'utf-8');
        console.log('File created');
    } catch (err) {
        console.log(err);
    }
}

createFile();

// Read the file
const readFile = async () => {
    try {
        const data = await fs.readFile(filepath, 'utf8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFile();

// Update the data
const updateData = async () => {
    try {
        await fs.appendFile(filepath, ' Updated', 'utf-8');
        console.log('File updated');
    }
    catch (err) {
        console.log(err);
    }
}

updateData();

// Delete the file
const deleteFile = async () => {
    try {
        await fs.unlink(filepath);
        console.log('File deleted');
    } catch (err) {
        console.log(err);
    }
}

deleteFile();

// Rename the file
const renameFile = async () => {
    try {
        await fs.rename(filepath, path.join(__dirname, 'AsyncAwaitTextRenamed.txt'));
        console.log('File renamed');
    }
    catch (err) {
        console.log(err);
    }
}

renameFile();