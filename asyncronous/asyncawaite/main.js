const hello = async () => {
	return 'Hello World';
};

hello()
	.then((res) => {
		console.log('response', res);
	})
	.catch((err) => {
		console.log('error', err);
	});