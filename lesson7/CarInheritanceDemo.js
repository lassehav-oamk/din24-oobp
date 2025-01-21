class Car{ 
    constructor(brand,registration) 
    { 
        this.brand=brand;     
        this.registration=registration; 
        this.speed=0; 
    }
    
    increaseSpeed() 
    { 
        this.speed+=5; 
    } 
    
    displaySpeed() 
    { 
        console.log(this.registration+",speed "+this.speed); 
    }     
} 

let bmw = new Car('BMW', 'ABC-111');
let audi = new Car('Audi', 'XYZ-999');

bmw.displaySpeed();
audi.displaySpeed();
bmw.increaseSpeed();

bmw.displaySpeed();
audi.displaySpeed();


class RaceCar extends Car {
    constructor(type, brand, registration) {
        super(brand, registration);
        this.type = type;
        
    }

    increaseSpeed() {
        this.speed += 10;
    }

    makeNoise() {
        console.log('BRRM BRRM!!!');
    }
}

let formula = new RaceCar('F1', 'Ferrari', 'III-000');
formula.displaySpeed();
formula.increaseSpeed();
formula.makeNoise();
formula.displaySpeed();