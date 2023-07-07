// Tuple
let Person: [string, string, number] = ["Ali", "Mustafayev", 20];

console.log(Person);

// define our tuple
let ourTuple: [number, string];

// initialize correctly
ourTuple = [5, "Coding God was here"];
// ourTuple.push(true);//Error Argument of type 'boolean' is not assignable to parameter of type 'string | number'
console.log(ourTuple);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');//Property 'push' does not exist on type 'readonly [number, boolean, string]'.

//Named Tuples

const graph: [x: number, y: number] = [55.2, 41.3];

//Destructuring Tuples
const graph2: [number, number] = [55.2, 41.3];
const [x, y] = graph2;
