"use strict";
let pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);
let myCar = {
    make: "Ford",
    model: "Focus",
    mileage: 12000, // `Required` forces mileage to be defined
};
console.log(myCar);
const nameAgeMap = {
    Alice: 21,
    Bob: 25,
};
console.log(nameAgeMap);
const bob = {
    name: "Bob",
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);
const bob2 = {
    name: "Bob",
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bob2);
const point = {
    x: 10,
    y: 20,
};
console.log(point);
