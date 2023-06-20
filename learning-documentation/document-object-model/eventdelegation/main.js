const form = document.querySelector('#form'); // mengambil element dg queryselector
const input = document.querySelector('input')
const list = document.querySelector('#notes');

input.addEventListener('change', (e) => {
    console.log("Ini nilainya berubah");
})

input.addEventListener('input', (e) => { // menghitung sebanyak karakter
    document.querySelector('h1').innerText = input.value;
})

form.addEventListener('submit', function(e){ // add event list + function param e
    e.preventDefault(); //preventDefault => membatalkan kebiasaan dari element
    const noteValue = input.value; //value dari input
    const newList = document.createElement('li'); // membuat element
    newList.innerText = noteValue;
    list.append(newList); // append => menyisipkan objek  setelah anak terakhir dari Elemen
    input.value = '';
})

// menghapus list dari parentnya
list.addEventListener('click', (e) => {
    e.target.nodeName == 'LI' && e.target.remove(); // selain nodeName li tidak akan dihapus
})