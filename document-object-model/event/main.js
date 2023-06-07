const button = document.querySelector('#clickme');

button.onclick = function (){
    console.log('You Clicked me');
};

const scream = () => {
    console.log('Dont Touch Me');
};

button.onmouseover = scream;

const eventBtn = document.querySelector('#event-btn');
eventBtn.addEventListener('click', stepSatu);
eventBtn.addEventListener('click', stepDua)

function stepSatu(){
    console.log('step satu');
}

function stepDua(){
    console.log('step dua');
}

eventBtn.onclick = stepSatu;
eventBtn.onclick = stepDua;