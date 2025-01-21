let a = { 
      foo: 1,
      bar: 2 
    } 
    
let b = {
      foo: 5, 
      bar: 6 
    } 
    
console.log(a.foo + b.bar); // 7 

let c = a; 
c.foo = 10; 

console.log(a.foo + b.bar); // is the output 7 or something else?

function selfSum(p)
{
    p.foo = p.foo + p.bar;
    return p;
}

let d = selfSum(a);
console.log(d);
console.log(a);
console.log(a == d);