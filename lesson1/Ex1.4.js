

function avgCalculator(values) {
    let sum = 0;

    for(let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    let average = sum / values.length;
    return average;
}

const a = [1, 2, 3];
const b = [50, 20, 100, 5];

console.log('Avg of a is ' + avgCalculator(a));
console.log('Avg of b is ' + avgCalculator(b));