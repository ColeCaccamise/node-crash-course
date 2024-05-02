import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Doe' },
	{ id: 3, name: 'Jim Doe' },
];
const server = createServer((req, res) => {
	if (req.url === '/api/users' && req.method === 'GET') {
		res.writeHead(200, {
			'Content-Type': 'application/json',
		});
		res.end(JSON.stringify(users));
	} else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
		const id = req.url.split('/')[3];
		const user = users.find((user) => user.id === parseInt(id));

		if (user) {
			res.writeHead(200, {
				'Content-Type': 'application/json',
			});
			res.end(JSON.stringify(user));
		} else {
			res.writeHead(404, {
				'Content-Type': 'application/json',
			});
			res.end(
				JSON.stringify({
					message: `No user with id ${id} found.`,
				})
			);
		}
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json',
		});
		res.end(
			JSON.stringify({
				message: 'Route not found.',
			})
		);
	}
});

server.listen(PORT, () => {
	console.log(`Server runnning on port: ${PORT}`);
});