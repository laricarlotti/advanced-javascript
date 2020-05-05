// Exercise 01

const numbers = [1, 2, 3];
const square = x =>  x * x;
const squaredNumbers = numbers.map(square); // [1, 4, 9]

// Exercise 02

const students = [
    { name: 'Ana', grade: 6 },
    { name: 'John', grade: 5 },
    { name: 'Noah', grade: 4 }
];

const teachers = [
    { name: 'Mark', salary: 1800 },
    { name: 'Todd', salary: 2500 },
    { name: 'Emma', salary: 3200 }

];

const byName = object => object.name;
const byNames = list => list.map(byName);

byNames(students);
byNames(teachers);

