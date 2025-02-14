

function something(a) {
    // does something

    // returns something
    return a + 5;
}

const arrowSomething = a => a + 5

console.log(something(1));
console.log(arrowSomething(1));

function something2(a,b) {
    return a+b+5;
}

const arrowSomething2 = (a,b) => a+b+5;