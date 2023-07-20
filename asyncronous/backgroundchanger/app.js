const delayedColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('white', 1000))
//     .then(() => delayedColorChange('black', 1000))

async function changeColor() {
    delayedColorChange('red', 1000);
    delayedColorChange('yellow', 1000)
}

changeColor();