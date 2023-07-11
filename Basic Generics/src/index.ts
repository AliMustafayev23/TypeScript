function writeNumber<S, T>(v1: S, v2: T) {
  return [v1, v2];
}
console.log(writeNumber<number, number>(5,3))
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };