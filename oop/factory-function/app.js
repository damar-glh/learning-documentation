// factory function = function yg tidak membutuhkan keyword this / new dalam pembuatan object
// function bisa langsung dipanggil melalui object yang dibuat
function changeColor(r, g, b) {
    const color = {}; // create object color

    // add rgb from object
    color.r = r;
    color.g = g;
    color.b = b;

    // function rgb from object
    color.rgb = function () {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    // function hex from object
    color.hex = function(){
        const {r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
    }
};
