const joePhysics = 4;
const joeMathPrimer = 3;
const joeIntroToProgramming = 2;

const lisaEngineeringEnglish = 4;
const lisaMathPrimer = 2;

const maxObjectOrientedProgramming = 5;
const maxEngineeringEngligh = 5;
const maxAdvancedPhysics = 2;


const joeGrades = [joePhysics, joeMathPrimer, joeIntroToProgramming];
const lisaGrades = [lisaEngineeringEnglish, lisaMathPrimer];
const maxGrades = [maxEngineeringEngligh, maxObjectOrientedProgramming, maxAdvancedPhysics];


function avgCalculator(values) {
    let sum = 0;

    for(let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    let average = sum / values.length;
    return average;
}


console.log('GPA of joe is ' + avgCalculator(joeGrades));
console.log('GPA of lisa is ' + avgCalculator(lisaGrades));
console.log('GPA of max is ' + avgCalculator(maxGrades));

// print study record of Max
// max.getAllCourses
// max.getGPA
// max.addCourse('AdvacedPhysics', 4)

