/* 1. Concatenation: Create two variables, firstName and lastName, and concatenate them to form a full name. Then, display the full name.​*/
const firstName = "Lasse";
const lastName = "Haverinen";

//const fullName = firstName + " " + lastName;
const fullName = firstName.concat(" ", lastName);
console.log(fullName);



/*
Name printout: Declare your name as a string in one variable called name and then create another variable, which uses the value of the name variable to print "My name is Max", where Max is your name from the name variable.​
*/
const namePrintout = `My name is ${fullName}`;
console.log(namePrintout);


/*
Substring: Use string "Javascript is fun" and use a suitable string method to extract word "is" from it.​
*/

const funStr = "Javascript is fun";
const subStr = funStr.substring(11, 13);
console.log(subStr);

/*

Uppercase and Lowercase: Convert a string to uppercase and lowercase. Use "MiXeD CaSe" as the initial string to convert. ​*/

const mixedStr = "MiXeD CaSe";
console.log(mixedStr.toLowerCase());
console.log(mixedStr);

console.log(mixedStr.toUpperCase());
console.log(mixedStr);

console.log(mixedStr.length);

/*

String Replace: Replace a specific word in a sentence with another word with a suitable method. Use "I love JavaScript!" As initial string and replace word "JavaScript" with word "coding".*/
const originalForReplace = "I love Javascript!";

console.log(originalForReplace.replace("Javascript", "coding"));