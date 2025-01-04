// Type parameter as constraints

function assign<T, U>(target: T extends U ? any : any, source: U): T {
  for (const key in source) {
    target[key] = source[key];
  }
  return target;
}

/**
 * Solution => Section 10.3
 * parameter "target: T" changed to "target: T extends U ? any : any"
 */
let data = assign({ a: 2, b: 10, c: 9, d: 15 }, { b: 20, d: 30 });
console.log(data);
