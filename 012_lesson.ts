// any type

let newVar: any = "I can do everything.";
newVar = 5;
newVar = true;
newVar = ["123", "234", 345];
newVar = { danger: "right", success: "true", grade: 5, isStudent: true };

console.log(newVar);
// you can add value what the type

// complex array
let newArr: (
  | string
  | number
  | boolean
  | (string | number | boolean)[]
  | { name: string; age: number; isStudent: boolean }
)[] = [
  "age",
  23,
  false,
  [23, "success", true],
  {
    name: "Justin",
    age: 23,
    isStudent: true,
  },
  {
    name: "John",
    age: 23,
    isStudent: false,
  },
];

console.log(newArr);
