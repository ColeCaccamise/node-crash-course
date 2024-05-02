// import fs from 'fs';
import { error } from 'console';
import fs from 'fs/promises';

// readFile() - callback (default)
// file location, encoding, callback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// readFileSync() - syncronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() -- Promise .then()
// fs.readFile('./test.txt', 'utf8')
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// readFile() - async version
const readFile = async () => {
	try {
		const data = await fs.readFile('./test.txt', 'utf8');
		console.log(data);
	} catch (err) {
		console.log(error);
	}
};

// writeFile()
const writeFile = async () => {
	try {
		await fs.writeFile('./test.txt', 'hi');
	} catch (error) {
		console.log(error);
	}
};

// appendFile()
const appendFile = async () => {
	try {
		await fs.appendFile('./test.txt', 'yooyyo');
	} catch (error) {
		console.log(error);
	}
};

writeFile();
appendFile();
// appendFile();
// appendFile();
readFile();
