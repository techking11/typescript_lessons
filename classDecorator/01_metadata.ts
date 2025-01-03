// generating metadata using class decorator
function addMetaData(target: any) {
  // add some metadata
  target.__customMetadata = {
    someKey: "someValue",
  };

  return target;
}

// add metadata to Person class using class decorator
@addMetaData
class Person {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }

  public greet() {
    return this._name;
  }
}

function getMetadataFromClass(target: any) {
  return target.__customMetadata;
}
// access __customMetadata from class directly
console.log(getMetadataFromClass(Person));

function getMetadataFromInstance(target: any) {
  return target.constructor.__customMetadata;
}

const person1 = new Person("Justin");
const person2 = new Person("John");

// access __customMetadata through the instance's constructor property
console.log(getMetadataFromInstance(person1));
console.log(getMetadataFromInstance(person2));
