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

// buat object dengan constructor function
// contoh constructor function dengan nama function diawali huruf besar 
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// function dibuat diluar constructor , namun didalam prototype 
Color.prototype.rgb = function () {
    const {r, g, b} = this; // this mengarah ke constructor function
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function () {
    const {r, g, b} = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
}

// add rgba color
Color.prototype.rgba = function(a = 1.0) {
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// call constructor function
const color1 = new Color(11, 199, 4); // buat object dengan kata kunci new
console.log(color1);

// lebih oke pakai constructor function dari pada factory function