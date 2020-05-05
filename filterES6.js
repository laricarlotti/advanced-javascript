// Exercise 01

const order = [1, 4, 7, 10];
const isBiggerThanFour = value => value > 4;

const numbersBiggerThanFour = order.filter(isBiggerThanFour); // [7, 10]