const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');

let p1Score = 0;
let p2Score = 0;
let winPoint = 5;
let isGameover = false;

p1Button.addEventListener('click', function(){
    if(!isGameover){
        p1Score += 1;
        if(p1Score === winPoint){
            isGameover = true
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function(){
    if(!isGameover){
        p2Score += 1;
        if(p2Score === winPoint){
            isGameover = true
        }
        p2Display.textContent = p2Score;
    }
});