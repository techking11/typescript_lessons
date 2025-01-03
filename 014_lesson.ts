// functions

// optional parameter
function newFn(val?: string) {}

// function parameter
function oldFn(otherFn: Function) {}

// constructor paramer
function defaultFn(newVarConstructor: { new (num: number) }) {
  new newVarConstructor(3);
}

interface OtherCons {
  new (name: string);
}
function diverseFn(newVarConstructor: OtherCons) {
  new newVarConstructor("Justin");
}

// with generics
interface ITConstructor<T, U> {
  new (item: T): U;
}

function foo2<T, U>(otherFnCons: ITConstructor<T, U>, item: T): U {
  return new otherFnCons(item);
}

// with generic without constructors but just functions
interface ITFuns<A, B> {
  (item: A): B;
}

function foo3<A, B>(otherCons: ITFuns<A, B>, item: A): B {
  return otherCons(item);
}

function foo4<C, D>(others: { (item1: C): D }, item2: C): D {
  return others(item2);
}
// you can give any character for generic

// Named function
// Anonymous function
// Lambda / Arrow function
