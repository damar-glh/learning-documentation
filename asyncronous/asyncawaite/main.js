// keyword async sudah pasri itu promise
// ada dua kemungkinan yaitu resolve dan reject

const hai = async () => {
	return 'haiiiii';
	// throw ''; // ini akan menghentikan async
}

hai()
	.then((res) => {
		console.log('response', res);
	})
	.catch((err) => {
		console.log('error', err);
	});


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
