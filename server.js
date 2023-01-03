// Libraries provided by the environment Node
const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 8000; // where your project is running

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello this is a new game\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
