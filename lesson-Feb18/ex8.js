const meteorites = require('./y77d-th95.json');

function getMeteoriteNamesWithLessOrEqualMass(meteoriteData, mass){
    const massResult = meteoriteData.filter(meteorite => meteorite.mass <= mass);
    const namesResult = massResult.map(meteorite => meteorite.name);
    return namesResult;
}

function getMeteoriteNamesWithLessOrEqualMassLoop(meteoriteData, mass){
    const namesResult = [];
    for(let i =0; i < meteoriteData.length; i++) {
        if(meteoriteData[i].mass <= mass) { // this is the filtering part
            namesResult.push(meteoriteData[i].name) // this is the mapping part
        }
    }
    return namesResult;
}


const output = getMeteoriteNamesWithLessOrEqualMassLoop(meteorites, 5)
console.log(output);
