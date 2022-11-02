const http = require('http');
const hostname = '178.128.250.77';
const port = 3000;
const server = http.createServer((req, res) => {res.statusCode = 200;res.setHeader('content-type', 'text/plain');res.end('hello bro ! \n');});
server.listen(port, hostname, () => {console.log(`Server running at http://${hostname} : ${port}/`);});