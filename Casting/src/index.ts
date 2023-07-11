let x: unknown = "hello";

console.log((x as string).length);

let y: unknown = "hello";

console.log((<string>y).length);
