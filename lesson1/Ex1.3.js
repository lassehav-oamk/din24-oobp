/*
Create code which calculates the average GPA of a student who has completed the following courses with grades:
•	Introduction to Programming – 5
•	Computer Devices – 3
•	Engineering English – 4
•	Object Oriented Programming – 2
•	Mathematics Primer – 4

*/

const introProgramming = 5;
const computerDevices = 3;
const engineeringEnglish = 4;
const objectOrientedProgramming = 2;
const mathematicsPrimer = 4;

const sum = introProgramming + computerDevices + engineeringEnglish + objectOrientedProgramming + mathematicsPrimer;
const count = 5;
const average = sum / count;

console.log('Student GPA: ' + average);
