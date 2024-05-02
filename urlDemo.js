import url from 'url';

const urlString = 'https://google.com/search?q=cole+caccamise';

// URL Object
const urlObj = new URL(urlString);

console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url - file URL
const file = import.meta.url;

// fileURLToPath()
console.log(url.fileURLToPath(file));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get('q'));
params.append('limit', 5);
console.log(params);
params.delete('q');
console.log(params);
