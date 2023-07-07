"use strict";
const names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
// Readonly keyword
// const names2: readonly string[] = ["Dylan"];
// names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
