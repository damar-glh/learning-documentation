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

req.open('GET', 'https://swapi.dev/api/people/3', true);
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


// simple request with fetch
const loadPeople = async () => {
	try {
		const res = await fetch ('https://swapi.dev/api/people/3');
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log('error', error)
	}

	try {
		const res2 = await fetch('https://swapi.dev/api/people/4');
		const data2 = await res2.json();
		console.log(data2);
	} catch (error) {
		console.log('error', error)
	}
}

loadPeople();