// global
let foo: number = 123;

// block scope
if (foo) {
  let foo = (x: number): number => {
    return x;
  };
  console.log(foo(2));
}

console.log(foo);

// function scope
function fool(x: number): number {
  var foo = x; // var foo = 3 // Output: 3 for last console
  return foo;
}

fool(3);

console.log(foo);
