class Color {
    // constructor adalah function yang pertama kali dijalankan saat class dipanggil
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    colorName(){
        console.log('The color name is ' + this.name);
    }

    rgb() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    hex() {
        const {r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
    }

    rgba(a = 1.0){
        const {r, g, b} = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}

// buat object dengan class , dengan kata kunci new 
const skyColor = new Color(185, 243, 252, 'sky');