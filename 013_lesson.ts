// how to get all enum
enum Alaphabets {
  A,
  B,
  C,
  D,
}
// console.log(typeof Alaphabets.B);
// console.log(Alaphabets.A, Alaphabets.B, Alaphabets.C, Alaphabets.D);

let someEnums: string[] = [];
for (let value in Alaphabets) {
  if (typeof Alaphabets[value] === "number") {
    someEnums.push(value);
  }
}

// someEnums.forEach((val) => console.log(val));

// extending enums without custom implementation
enum WorthValues {
  value1 = "Value 1",
  value2 = "Value 2",
}

enum AdditionalToWorthValues {
  value3 = "Value 3",
  value4 = "Value 4",
}

type Values = WorthValues | AdditionalToWorthValues;

let newValues = Object.assign({}, WorthValues, AdditionalToWorthValues);
//console.log(newValues, WorthValues);

// custom enum
class Enum {
  constructor(protected value: string) {}

  public toString() {
    return String(this.value);
  }

  public is(value: Enum | string) {
    return value.toString();
  }
}

let val = new Enum("str");
// console.log(
//   typeof val,
//   val,
//   val.toString(),
//   val.is("Justin"),
//   new Enum("John")
// );

class SourceEnum extends Enum {
  public static value1 = new SourceEnum("value1");
}

console.log(
  SourceEnum.value1,
  SourceEnum.value1.toString(),
  SourceEnum.value1.is("value2"),
  SourceEnum.value1.is(new SourceEnum("value3"))
);
