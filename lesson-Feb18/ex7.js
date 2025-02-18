const meteorites = require('./y77d-th95.json');

const meteoritesLessThan100 = meteorites
    .filter(meteorite => parseFloat(meteorite.mass) < 100)
    .map(meteorite => {
        return { ...meteorite, mass: parseFloat(meteorite.mass)}
    });

console.log(meteoritesLessThan100);