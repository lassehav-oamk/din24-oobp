class Food {
    constructor(foodName, quantity) {
        this.name = foodName;
        this.quantity = quantity;
    }

    whatIsThis() {
        console.log(this.name);
    }

    eatOne() {
        if(this.quantity > 0) {
            this.quantity--;
            console.log('Slurp! One ' + this.name.toLowerCase() + ' eaten. ' + this.quantity + ' remaining');
        }
        else {
            console.log('Sorry, no more ' + this.name.toLowerCase() + 's remaining!');
        }
    }
}

class Refrigerator {
    constructor() {
        this.storage = [];
    }

    putFood(food) {
        this.storage.push(food)
    }

    getContents() {
        console.log('-----------');
        for(let i = 0; i < this.storage.length; i++) {
            console.log(`| ${this.storage[i].name} ${this.storage[i].quantity}`)
        }
        console.log('-----------'); 
    }

    getAndEatFood() {
        // Write your implementation here
    }
}

let r = new Refrigerator(); 
let apple = new Food('Apple',2); 
let bananas = new Food('Banana',3); 

r.putFood(apple); 
r.putFood(bananas); 
r.getContents(); 
r.getAndEatFood('Apple'); 
r.getAndEatFood('Apple'); 
r.getAndEatFood('Banana'); 
r.getAndEatFood('Apple'); 
r.getContents(); 

/* Output goal

----------- 
| Apple 2 
| Banana 3 
----------- 
Slurp! One apple eaten. 1 remaining 
Slurp! One apple eaten. 0 remaining 
Slurp! One banana eaten. 2 remaining 
Sorry, no such food in this refrigerator! 
----------- 
| Banana 2 
----------- 

*/