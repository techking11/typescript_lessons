// Basic Interfaces
interface Person {
  name: string;
  age: number;
}

const guest: Person = {
  name: "Justin",
  age: 23,
};

// Optional Properties
interface Vehicle {
  make: string;
  model: string;
  year?: string;
}

const car: Vehicle = { make: "Toyota", model: "Corolla" };

// ReadOnly Properties
interface Book {
  readonly title: string;
  author: string;
}

const myBook: Book = { title: "1990", author: "George Orwell" };
