function addMetadata(metadata: any) {
  return function log(target: any) {
    // add metadata
    target.__customMetadata = metadata;

    // return target
    return target;
  };
}

@addMetadata({ guid: "417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf" })
class Person2 {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }

  public greet(): string {
    return this._name;
  }
}

function getMetadataFromClasses(target: any) {
  return target.__customMetadata;
}

console.log(getMetadataFromClasses(Person2));
