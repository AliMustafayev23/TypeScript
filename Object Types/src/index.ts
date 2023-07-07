const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

console.log(car);

//Optional Properties

const car2: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car2.mileage = 2000;

console.log(car2);

//Index Signatures
const nameAgeMap: { [index: string]: string } = {};

nameAgeMap.Mark = "Fifty";

//Exercise
const car3: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};
