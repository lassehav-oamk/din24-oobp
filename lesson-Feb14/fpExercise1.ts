interface User {
    name: string, 
    age: number
}

const users = [{ 
        name:"John", 
        age: 33 
    }, 
    { 
        name:"Maxine", 
        age: 24 
    }, 
    { 
        name:"Ted", 
        age: 12 
    }, 
] 
    
     
    
const ageLimit = 18; 
function checkAge(user : User) { 
    return user.age >= ageLimit; 
} 
    
checkAge(users[0]); 
checkAge(users[1]); 
checkAge(users[2]); 

// Convert checkAge to a pure function
function pureCheckAge(userAge : number, ageLimit : number) {
    return userAge >= ageLimit
}