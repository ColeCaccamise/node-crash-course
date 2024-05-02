// new entry point
import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
	if (req.url == '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
		});
		res.end('<h1>Home Page</h1>');
	} else if (req.url == '/about') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
		});
		res.end('<h1>About page</h1>');
	} else {
		res.writeHead(404, {
			'Content-Type': 'text/html',
		});
		res.end('<h1>Page not found! Where are you trying to go...</h1>');
	}

	console.log(req.url);
	console.log(req.method);

	// res.statusCode = 404;

	// res.write('<h1>Hello World</h1>');
});

server.listen(PORT, () => {
	console.log(`The server is running on port ${PORT}`);
});
