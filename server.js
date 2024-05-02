// new entry point
import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url); // gives file URL to whatever this file this is in
const __dirname = path.dirname(__filename);

// console.log(import.meta.url);
console.log(__filename);
console.log(__dirname);

const server = http.createServer(async (req, res) => {
	try {
		let filePath;

		if (req.method === 'GET') {
			if (req.url == '/') {
				filePath = path.join(__dirname, 'public', 'index.html');
			} else if (req.url == '/about') {
				filePath = path.join(__dirname, 'public', 'about.html');
			} else {
				throw new Error('Not Found');
			}
		} else {
			throw new Error('GET is the only method allowed.');
		}

		const data = await fs.readFile(filePath);
		res.setHeader('Content-Type', 'text/html');
		res.write(data);
		res.end();
	} catch (err) {
		res.writeHead(500, {
			'Content-Type': 'text/plain',
		});
		res.end('Only GET requests are allowed!');
	}

	// res.statusCode = 404;

	// res.write('<h1>Hello World</h1>');
});

server.listen(PORT, () => {
	console.log(`The server is running on port ${PORT}`);
});
