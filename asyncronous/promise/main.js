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

// callback hell
requestCallback('movie.com', function(response){
    console.log('It work.', response);
    requestCallback('movie.com', function(response){
        console.log('It work.', response);
        requestCallback('movie.com', function(response){
            console.log('It work.', response);
        }, function(error){
            console.log('Erorr, It not work.', error)
        })
    }, function(error){
        console.log('Erorr, It not work.', error)
    })
}, function(error){
    console.log('Erorr, It not work.', error)
})