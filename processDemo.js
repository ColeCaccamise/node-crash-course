console.log(process);

// process.env
console.log(process.env);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// update()
console.log(process.uptime());

process.on('exit', (code) => {
	console.log('Exiing with code: ', code);
});

// exit()
process.exit(0);

console.log('hi from after exit');
