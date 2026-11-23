const http = require('http');

const server = http.createServer((req, res) => {
	res.end('Hello from Jenkins and GitHub!');
});

server.listen(8000, '0.0.0.0');
