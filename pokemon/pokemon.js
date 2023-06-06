const container = document.querySelector('#container'); // mengambil elemen dg .querySelector
const baseImgURL ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; 

for (let i = 1; i <= 1000; i++) {
	const pokeBall = document.createElement('div'); // membuat element baru
	pokeBall.classList.add('pokemon'); // menambah class

	const imgPokemon = document.createElement('img');
	imgPokemon.src = `${baseImgURL}${i}.png`;

	const label = document.createElement('span');
	label.innerText = i; // innerText untuk menampilkan dalam html

	pokeBall.appendChild(imgPokemon); // menambahkan elemen sebagai anak terakhir dari elemen.
	pokeBall.appendChild(label);
	container.appendChild(pokeBall);
}