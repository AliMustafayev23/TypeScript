"use strict";
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
console.log(car);
//Optional Properties
const car2 = {
    // no error
    type: "Toyota",
};
car2.mileage = 2000;
console.log(car2);
//Index Signatures
const nameAgeMap = {};
nameAgeMap.Mark = "Fifty";
//Exercise
const car3 = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
