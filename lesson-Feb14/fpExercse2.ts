const values = [533,235,223,56,88,2,6,88,664]; 

function minValue() { 
    let min = null; 
    for(let i = 0; i < values.length; i++) { 
        if((min != null) || (values[i] < min)) { 
            min = values[i]; 
        } 
    }
    return min; 
} 

const minimum = minValue();  

console.log(minimum); // 2 

// Task is to convert minValue to a pure function
function pureMinValue(searchTargetArray : number[]) {
    let min = null; 
    for(let i = 0; i < searchTargetArray.length; i++) { 
        if((min != null) || (searchTargetArray[i] < min)) { 
            min = searchTargetArray[i]; 
        } 
    }
    return min; 
}