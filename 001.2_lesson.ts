// Basic Types
let yourAge: number = 23;
let isAStudent: boolean = true;
let firstName: string = "Justin";

// Array Types
let allAges: number[] = [23, 25, 27, 29];

// Function Types
function greet(name: string): string {
  return `Hello ${name}!`;
}

// Optional and Default Parameters
function logMessage(message: string, userId?: number): void {
  console.log(message, userId || "Guest");
}
