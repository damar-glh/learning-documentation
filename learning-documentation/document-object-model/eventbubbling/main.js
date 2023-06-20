const button = document.querySelector('#changeColor');
const container = document.querySelector('#container')

button.addEventListener('click', function (e){
    container.style.backgroundColor = generateColor();
    e.stopPropagation();
});

container.addEventListener('click', function(){
    container.classList.toggle('hide')
})

const generateColor = () => { // arrow function untuk generate color 
    const r = Math.floor(Math.random() * 255); // pengkalian dg math random agar warna terus berubah
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};
