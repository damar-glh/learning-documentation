// cara membuat promise yang benar
const delayedColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
        reject((err) => {
            console.log(err);
        })
    })
}

// pemanggilan promise
// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('white', 1000))
//     .then(() => delayedColorChange('black', 1000))

// keyword async and await function
async function changeColor() {
    await delayedColorChange('red', 1000); //keyword await
    await delayedColorChange('yellow', 1000)
    return 'all done'
}


// handle async await function
changeColor().then((res) => alert(res));

async function printRainbow() {
    changeColor();
    return 'all done'
}

printRainbow().then((res) => alert(res));