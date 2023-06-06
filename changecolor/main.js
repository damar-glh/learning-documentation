const button = document.querySelector('button'); // mengambil elemen dg .querySelector
const judul = document.querySelector('h1'); // mengambil elemen dg .querySelector

const generateColor = () => { // arrow function untuk generate color 
    const r = Math.floor(Math.random() * 255); // pengkalian dg math random agar warna terus berubah
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener('click', () =>  { // add event list pada button 
    const newColor = generateColor();
    document.body.style.backgroundColor = newColor;
    judul.innerText = newColor;
} );
 