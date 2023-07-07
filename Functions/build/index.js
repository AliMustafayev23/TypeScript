"use strict";
// Return type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
console.log(typeof getTime());
//Void return
function printHello() {
    console.log("Hello!");
}
printHello();
//Parametrs
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
//Optional Parametrs
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 5));
//Default Parametrs
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log(pow(10));
//Named Parametrs
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
//Rest Parametrs
function divide2({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide2({ dividend: 10, divisor: 2 }));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
console.log(negateFunction(10));
