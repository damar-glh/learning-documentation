const button = document.querySelector('#clickme'); // ambil id dg querySelector

button.onclick = function (){ // att .onclick
    console.log('You Clicked me');
};

const scream = () => {
    console.log('Dont Touch Me');
};

button.onmouseover = scream; //att .onmouseover

const eventBtn = document.querySelector('#event-btn');
eventBtn.addEventListener('click', stepSatu); // add event list
eventBtn.addEventListener('click', stepDua)

function stepSatu(){
    console.log('step satu');
}

function stepDua(){
    console.log('step dua');
}

// eventBtn.onclick = stepSatu;
// eventBtn.onclick = stepDua;