let a = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
};

console.log(a.year);
a.year = 2020;
console.log(a.year);

delete a.year;
console.log(a.year);

a.registration = "FOO-BAR";
console.log(a);

for(const property in a) {
    console.log(property);
    console.log(a[property]);
}