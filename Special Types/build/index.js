"use strict";
//Without any (Error)
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
//With any
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
//Unknown
let v = true;
v = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
console.log("type v:", typeof v);
//Never
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log("I always does something and never ends.");
    }
}
//Null and undefined
let y = undefined;
console.log("type y:", typeof y);
let z = null;
console.log("type z:", typeof z);
