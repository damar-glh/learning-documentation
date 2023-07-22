// untuk membaca json pada java script maka bisa menggunakan JSON.parse()
// untuk mengirim ke server maka bisa gunakan JSON.stringify()
const req = new XMLHttpRequest();
let data;

req.onload = function () {
	data = JSON.parse(this.responseText);
	console.log(data);
};

req.onerror = function () {
	console.log('Error', this);
};

req.open('GET', 'https://swapi.dev/api/people/1', true);
myReq.setRequestHeader('Accept', 'application/json');
req.send();

fetch('https://swapi.dev/api/people/1')
	.then((res) => {
		if (!res.ok) {
			throw Error('Could not fetch the data for that resource');
		}
		return res.json();
	})
	.then((data) => {
		console.log('json 1', data);
		return fetch('https://swapi.dev/api/people/2');
	})
	.then((res) => {
		console.log('request 2');
		if (!res.ok) {
			throw Error('Could not fetch the data for that resource');
		}
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log('error', err);
	});
