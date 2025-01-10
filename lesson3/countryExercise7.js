let countries = [
    {
        name: 'Belgium',
        population: 11589623,
        largestCity: 
            {
                name: 'Brussels',
                population: 174383
            }
    },
    {
        name: 'France',
        population: 65273511,
        largestCity: 
            {
                name: 'Paris',
                population: 2190327
            }
    },
    {
        name: 'Finland',
        population: 5540720,
        largestCity: 
            {
                name: 'Helsinki',
                population: 648042
            }
    },
    {
        name: 'Sweden',
        population: 10367232,
        largestCity: 
            {
                name: 'Stockholm',
                population: 1515017
            }
    },
    {
        name: 'Norway',
        population: 5367580,
        largestCity: 
            {
                name: 'Oslo',
                population: 634293
            }
    }
];

// Create a function which prints the names of the countries and their biggest cities given in an array
function printCountryNameAndLargestCity(countries) {
    for(let i = 0; i < countries.length; i++){
        console.log(countries[i].name + 's biggest city is ' + countries[i].largestCity.name)
    }
}

printCountryNameAndLargestCity(countries);