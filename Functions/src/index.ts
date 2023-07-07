// Return type
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());
console.log(typeof getTime());

//Void return
function printHello(): void {
  console.log("Hello!");
}
printHello();

//Parametrs
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(2, 5));
//Optional Parametrs
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log(add(2, 5));
//Default Parametrs
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

console.log(pow(10));
//Named Parametrs
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));
//Rest Parametrs
function divide2({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

console.log(divide2({ dividend: 10, divisor: 2 }));
//Type Alias
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));