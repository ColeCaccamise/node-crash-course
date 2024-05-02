import crypto from 'crypto';

// createHash()
const hash = crypto.createHash('sha256');
hash.update('passw0rd');
console.log(hash.digest('hex'));

crypto.randomBytes(16, (err, buf) => {
	if (err) throw err;
	console.log(buf.toString('hex'));
});
