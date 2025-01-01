// Generics function
function identify<T>(value: T): T {
  return value;
}

console.log(identify<string>("Justin")); // Justin
console.log(identify<number>(23)); // 23

// Generics Class
class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // 123

// Generics Constraints
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello"); // 5
logLength([1, 2, 3]); // 3
