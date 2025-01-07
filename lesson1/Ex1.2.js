
const values = [5, 2, 7, 8, 10, 15, 16, 4, 0, 1];

let sum = 0;

// sum = values[0] + values[1] + values[2]...

for(let i = 0; i < values.length; i++) {
    sum += values[i];
}

let average = sum / values.length;

console.log('Sum is ' + sum);
console.log('Average is ' + average);

