function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}

printStatusCode(404);
printStatusCode("200");
//Error
// function printStatusCode2(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`); // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
// }