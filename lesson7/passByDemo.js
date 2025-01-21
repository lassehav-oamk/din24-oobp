let a = 10;

function selfSum(p) {
    p = p + p;
    return p;    
}

let b = selfSum(a);
console.log(b);
console.log(a);
