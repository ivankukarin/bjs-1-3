'use strict'

let x;
let y;
let z;

x = 2;
y = 22;
z = 0;

const calculateSum = () => (
    x * y + 5 * z + x - 1
);

let result = calculateSum();

console.log(result);