const posts = [
	{ id: 1, title: 'Post One' },
	{ id: 2, title: 'Post Two' },
];

const getPostsLength = () => posts.length;

const getPosts = () => posts;

export { getPosts, getPostsLength };

// export default getPosts; // without curly braces
