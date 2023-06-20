document.querySelector('button').addEventListener('click', (e) => { // add event list
    console.log(e); // log menampilkan di console
});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => { // keydown event heandler saat menekan tombol pada keyboard.
    switch(e.code){ // .code
        case 'ArrowUp' :
            console.log('Tombol Arah Atas');
            break;
        case 'ArrowDown' :
            console.log('Tombol Arah Bawah');
            break;
        case 'ArrowLeft' :
            console.log('Tombol Arah Kiri');
            break;
        case 'ArrowRight' :
            console.log('Tombol Arah Kanan');
            break;
        default :
            console.log('Diabaikan...');
    }
});

// input.addEventListener('keyup', () => { 
// melepaskan tombol pada keyboard dan setelahnya nilai input / textarea diperbarui 
//     console.log('Tombol dirilis');
// })