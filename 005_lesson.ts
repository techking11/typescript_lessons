// Numeric Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0

// String Enums
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

let currentStatus: Status = Status.Active;
console.log(currentStatus); // Output: ACTIVE

// Heterogeneous Enums
enum Mixed {
  Yes = 1,
  No = 0,
}
console.log(Mixed.No); // Output: 0
console.log(Mixed.Yes); // Output: 1
