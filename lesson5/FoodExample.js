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


let banana = new Food('Banana', 4); 

banana.whatIsThis(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 
banana.eatOne(); 


/* output goal
Banana 
Slurp! One banana eaten. 3 remaining 
Slurp! One banana eaten. 2 remaining 
Slurp! One banana eaten. 1 remaining 
Slurp! One banana eaten. 0 remaining 
Sorry, no more bananas remaining! 


*/