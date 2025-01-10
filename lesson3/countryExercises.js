const belgium = {
    name: 'Belgium',
    population: 11589623,
    languages: ['Dutch', 'French', 'German'],
    capital: 'Brussels',
    area: 30689,
    neighbours: ['France', 'Germany', 'Luxembourg', 'Netherlands'],
    countryCode: 'BE'
};

const france = {
    name: 'France',
    population: 65273511,
    languages: ['French'],
    capital: 'Paris',
    area: 551695,
    neighbours: ['Belgium', 'Germany', 'Italy', 'Luxembourg', 'Monaco', 'Spain', 'Switzerland'],
    countryCode: 'FR'
};

// Exercise 2
function populationPrinter(country) {
    console.log('The population of ' + country.name + ' is ' + country.population);
}

populationPrinter(belgium);
populationPrinter(france);


// Exercise 3
// array of countries
const someArray = [50, 2, 4, 5, 7];
const anotherArray = ['Max', 'Jane', 'Theo'];

const arrayOfCountries = [
    belgium, 
    france,
    {
        name: 'Finland', 
        population: 5540720,
        languages: ['Finnish', 'Swedish'],
        capital: 'Helsinki',
        area: 338424,
        neighbours: ['Norway', 'Sweden', 'Russia'],
        countryCode: 'FI'
    }
];

console.log(arrayOfCountries);

function getMaximumPopulation(countryArray) {
    let countryWithBiggestPopulation = countryArray[0];
    for(let i = 0; i < countryArray.length; i++) {
        console.log(countryArray[i].population);
        if(countryWithBiggestPopulation.population < countryArray[i].population){
            countryWithBiggestPopulation = countryArray[i];
        }
    }
    return countryWithBiggestPopulation;
}

console.log(getMaximumPopulation(arrayOfCountries));


// Exercise 4

function getSumOfPopulations(countryArray) {
    let sum = 0;
    for(let i = 0; i < countryArray.length; i++) {
        sum += countryArray[i].population
    }
    return sum;
}

console.log('Sum of populations: ' + getSumOfPopulations(arrayOfCountries));


// Exericse 5
// Desired output ['BE', 'FR', 'FI']
function getCountryCodes(countryArray) {
    let resultArrayOfCountryCodes = [];

    for(let i = 0; i < countryArray.length; i++) {
        resultArrayOfCountryCodes.push(
            countryArray[i].countryCode
        );
    }

    return resultArrayOfCountryCodes;
}

console.log(getCountryCodes(arrayOfCountries));

