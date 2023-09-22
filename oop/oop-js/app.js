// konsep inheritance and polymorphism 
class Peliharaan {
    // parent
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    
    Eat(){
        console.log(`${this.name} is eating`);
    }
}

// turunan menggunakan extends keyword
class Kucing extends Peliharaan {
    // children
    constructor (name, age, weight, lives) {
        super(name, age, weight); // keyword super to add constructor
        this.lives = lives;
    }

    meong(){
        return 'Meonggg!!';
    }
}

// turunan menggunakan extends keyword
class Anjing extends Peliharaan {
    Gonggong(){
        return 'Gonggong';
    }
}

// create new object
const kucing1 = new Kucing('Bubu',3,12,9);
const anjing1 = new Anjing('Babu', 8, 20);