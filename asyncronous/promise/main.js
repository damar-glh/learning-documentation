// callback version
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};

// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

// panggil request promise namun bisa terjadi callback hell
requestPromise('movie.com').then((response) => {
	console.log('success', response);
}).catch((err) => {
	console.log('error', err);
});

// panggil request promise tanpa terjadi callback hell
requestPromise('movie.com').then((result) => {
	console.log('page 1');
	console.log(result);
	return requestPromise('movie.com');
}).then(() => {
	console.log('page 2');
	console.log(result);
	return requestPromise('movie.com');
}).then((result) => {
	console.log('page 3');
	console.assert(result);
	return requestPromise('movie.com');
}).catch((err) => {
	console.log('error');
});


// callback hell
// requestCallback('movie.com', function(response){
//     console.log('It work.', response);
//     requestCallback('movie.com', function(response){
//         console.log('It work.', response);
//         requestCallback('movie.com', function(response){
//             console.log('It work.', response);
//             requestCallback('movie.com', function(response){
//                 console.log('It work.', response);
//                 requestCallback('movie.com', function(response){
//                     console.log('It work.', response);
//                 }, function(error){
//                     console.log('Erorr, It not work.', error)
//                 })
//             }, function(error){
//                 console.log('Erorr, It not work.', error)
//             })
//         }, function(error){
//             console.log('Erorr, It not work.', error)
//         })
//     }, function(error){
//         console.log('Erorr, It not work.', error)
//     })
// }, function(error){
//     console.log('Erorr, It not work.', error)
// })

// promise request
// requestPromise('movie.com').then((response) => {
//     console.log('succes', response);
// }).catch((error) => {
//     console.log('error', error);
// });

const contohPromise = () => {
	return new Promise((resolve, reject) => {
		resolve(() => {
			'berhasil'
		});
		reject(() => {
			'gagal'
		});
	})
}

// handler error dengan async and await
async function requestHandler() {
	try {
		let result = await requestPromise('movie.com');
		console.log(result);
	} catch (error) {
		console.log('Error', error);
	}
}