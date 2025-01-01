class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

const Dog = new Animal("Dog");
Dog.speak();
