"use strict";
// Tuple
let Person = ["Ali", "Mustafayev", 20];
console.log(Person);
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, "Coding God was here"];
// ourTuple.push(true);//Error Argument of type 'boolean' is not assignable to parameter of type 'string | number'
console.log(ourTuple);
// define our readonly tuple
const ourReadonlyTuple = [
    5,
    true,
    "The Real Coding God",
];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');//Property 'push' does not exist on type 'readonly [number, boolean, string]'.
//Named Tuples
const graph = [55.2, 41.3];
//Destructuring Tuples
const graph2 = [55.2, 41.3];
const [x, y] = graph2;
