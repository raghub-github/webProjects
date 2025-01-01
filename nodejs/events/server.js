const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/edit') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 contenteditable="true"> Edit Here </h1>');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});