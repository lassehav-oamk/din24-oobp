let student1 = {
    name: 'John Doe',
    age: 30,
    city: 'Suomussalmi'
}

let student2 = {
    name: 'Jane Doe',
    age: 25,
    city: 'Helsinki'
}

let student3 = {
    name: 'Jack Doe',
    age: 35,
    city: 'Oulu'
}

// to create a bunch of students, lets declare a class
class Student {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
        this.studentNumber = Math.floor(Math.random() * 1000);
    }

    // methods
    printNameAndStudentNumber() {
        console.log('Name: ' + this.name);
    }
}

let student4 = new Student('Jill Doe', 40, 'Kuopio');
let student5 = new Student('Jim Doe', 45, 'Tampere');
let student6 = new Student('Jenny Doe', 50, 'Jyväskylä');
let student7 = new Student('Jared Doe', 55, 'Rovaniemi');

student4.printNameAndStudentNumber();
student5.printNameAndStudentNumber();
student6.printNameAndStudentNumber();
student7.printNameAndStudentNumber();