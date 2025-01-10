const belgium = {
    name: 'Belgium',
    population: 11589623,
    languages: ['Dutch', 'French', 'German'],
    capital: 'Brussels',
    area: 30689,
    neighbours: ['France', 'Germany', 'Luxembourg', 'Netherlands']  
};

const france = {
    name: 'France',
    population: 65273511,
    languages: ['French'],
    capital: 'Paris',
    area: 551695,
    neighbours: ['Belgium', 'Germany', 'Italy', 'Luxembourg', 'Monaco', 'Spain', 'Switzerland']  
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
        neighbours: ['Norway', 'Sweden', 'Russia']
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

