function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Justin")); // Output: Justin
console.log(identity<number>(25)); // Output: 23
