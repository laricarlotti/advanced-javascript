var calculate = function(fn, x, y) {
    return fn(x, y);
}

const sum = (x, y) => x + y; 
const mult = (x, y) => x * y;

calculate(sum, 2, 5); // 7
calculate(mult, 3, 4); // 12