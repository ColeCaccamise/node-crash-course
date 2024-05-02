import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

function logger(variableName, value) {
	console.log('\n');
	console.log(`${variableName}: ${value}`);
	console.log('\n');
}

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n');
console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);

// join()
const filePath2 = path.join('__dirname', 'dir1', 'dir2', 'test.txt');
logger('filePath2', filePath2);

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
logger('filePath3', filePath3);
