// Exercise 01

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = numbers.filter(function (number){
    return (number % 2 === 0);
});

console.log(filtered);

// Exercise 02

const objs = [
    {a:'1', b:'2'}, 
    {a:'3', b:'4'}, 
    {a:'5', b:'6'}
];
const filteredObjs = objs.filter(function(obj){
    return (Number.parseInt(obj.a) % 2 === 0)
});


console.log(filteredObjs);

