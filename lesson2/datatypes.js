let a = null;
let b = 5;
let c = "hello";
let d;
let e = null;


console.log(typeof d);

if(d === e) {
    console.log('yes equal');
} else {
    console.log('not equal')
}


// numbers

let num1 = 25;
let num2 = 0x19;
console.log(num2);

// binary
let num3 = 0b11;

console.log(num3 + 0b11);

// Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);

let max = Number.MAX_SAFE_INTEGER + 1;
let max2 = Number.MAX_SAFE_INTEGER + 2;
console.log(max);
console.log(max == max2);


// floating point exercise

let f1 = 0.5 - 0.4;
let f2 = 0.4 - 0.3;

console.log(f1);
console.log(f2);

if(f1 == f2) {
    console.log('number match')
} else {
    console.log('numbers do not match');
}

// BigInt 64bits
let big = 9007199254740991n + 1n;
let big2= 9007199254740991n + 2n;
console.log(big == big2);

// strings
let str = "Hello 'ol' world";
console.log(str)

let templateLiteralStr = `The value of f1 is ${f1}`;
console.log(templateLiteralStr)


if(str.includes('world')){
    console.log('yes world found');
} else {
    console.log('world not found');
}



