const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');


let x = 10, y = 5;

console.log(`${x} + ${y} = ${add(x, y)}`);
console.log(`${x} - ${y} = ${subtract(x, y)}`);
console.log(`${x} * ${y} = ${multiply(x, y)}`);
console.log(`${x} / ${y} = ${divide(x, y)}`);
