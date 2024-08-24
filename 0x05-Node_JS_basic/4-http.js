// A small HTTP server using Node's HTTP module
const { createServer } = require('http');

const host = '127.0.0.1';
const port = 1245;

const app = createServer((request, response) => {
  response.end('Hello Holberton School!');
});

app.listen(port, host);

module.exports = app;
