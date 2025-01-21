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

    getAndEatFood(foodName) {
        let matchFound = false;
        for(let i = 0; i < this.storage.length; i++){
            if(foodName == this.storage[i].name) {
                // if matching
                this.storage[i].quantity--;
                console.log('Slurp! One ' + foodName + ' eaten. ' + this.storage[i].quantity + ' remaining')
                matchFound = true;

                // check if all food of this name are eaten, if so delete the object
                if(this.storage[i].quantity == 0) {
                    this.storage.splice(i, 1);
                }
                break;
            }
        }

        // if we did not find any matching food then print this
        if(matchFound == false) {
            console.log('Sorry, no such food in this refrigerator!');
        }
        
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