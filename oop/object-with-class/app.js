// menggunakan class mempermudah agar ketika menambahkan method tidak harus melalui prototype
class Color {
    // constructor adalah function yang pertama kali dijalankan saat class dipanggil
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
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

    hsl() {
        const {h, s, l} = this;
        return `hsl(${h}, ${s}, ${l}%)`;
    }

    fullySaturated(){
        const {h, s, l} = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    opposite(){
        const {h, s, l} = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}, ${l}%)`;
    }

    calcHSL(){
        let {r, g, b} = this;
        // Buatlah r, g, dan b pecahan dari 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Temukan nilai saluran terbesar dan terkecil
        let cmin = Math.min(r, g, b), 
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
            // Blue is max
        else h = (r - g) / delta + 4;
            
            h = Math.round(h * 60);
            
        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
            // Calculate lightness
            l = (cmax + cmin) / 2;
            
            // Calculate saturation
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            
            // Multiply l and s by 100
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);
            this.h = h;
            this.s = s;
            this.l = l;
    }
}

// buat object dengan class , dengan kata kunci new 
const skyColor = new Color(185, 243, 252, 'sky');
document.body.style.backgroundColor = skyColor.fullySaturated();
document.body.style.backgroundClip = skyColor.opposite();