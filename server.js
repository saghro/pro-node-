// server.js

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello Node!!!!</h1>\n');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
