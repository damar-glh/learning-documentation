const form = document.querySelector('#form'); // mengambil element dg queryselector
const input = document.querySelector('input')
const list = document.querySelector('#notes');

form.addEventListener('submit', function(e){ // add event list + function param e
    e.preventDefault(); //preventDefault => membatalkan kebiasaan dari element
    const noteValue = input.value; //value dari input
    const newList = document.createElement('li'); // membuat element
    newList.innerText = noteValue;
    list.append(newList); // append => menyisipkan objek  setelah anak terakhir dari Elemen
    input.value = '';
})