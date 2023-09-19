// menggunakan class mempermudah agar ketika menambahkan method tidak harus melalui prototype
class Color {
    // constructor adalah function yang pertama kali dijalankan saat class dipanggil
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB(){
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    colorName(){
        console.log('The color name is ' + this.name);
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    hex() {
        const {r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
    }

    rgba(a = 1.0){
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

// buat object dengan class , dengan kata kunci new 
const skyColor = new Color(185, 243, 252, 'sky');