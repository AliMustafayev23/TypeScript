//Numeric Enums - Default
enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.East;

// East is the first value so it logs '1'
console.log(currentDirection);

//Numeric Enums - Initialized
enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West,
}

// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections2.North);

// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections2.West);

//Numeric Enums - Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

// logs 404
console.log(StatusCodes.NotFound);

// logs 200
console.log(StatusCodes.Success);

//String Enums
enum CardinalDirections3 {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
// logs "North"
console.log(CardinalDirections3.North);
// logs "West"
console.log(CardinalDirections3.West);
