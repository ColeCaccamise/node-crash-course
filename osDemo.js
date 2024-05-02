import os from 'os';

function bytesToGB(bytes) {
	return bytes / (1024 * 1024 * 1024);
}

// userInfo()
console.log(os.userInfo());

// totalmem()
console.log(bytesToGB(os.totalmem()));

// freemem()
console.log(bytesToGB(os.freemem()));

// cpus()
console.log(os.cpus());
