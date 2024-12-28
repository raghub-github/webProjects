const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'AsyncAwaitText.txt');

// Read folder
const readFolder = async () => {
    try {
        const data = await fs.promises.readdir(__dirname);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFolder();