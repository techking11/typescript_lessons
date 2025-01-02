// String Literal Types
let myFavouritePet: "dog";
myFavouritePet = "dog";

type Species = "cat" | "dog" | "bird";

interface Pet {
  species: Species;
  name: string;
  eat(): void;
  walk(): void;
  eat(): void;
  sleep(): void;
}

interface Cat extends Pet {
  species: "cat";
}

interface Bird extends Pet {
  species: "bird";
  sing(): void;
}

interface Dog extends Pet {
  species: "dog";
}

// function buyPet(pet: "cat", name: string): Cat;.
// function buyPet(pet: "bird", name: string): Bird;
// function buyPet(pet: "dog", name: string): Dog;
function buyPet(pet: Species, name: string): Pet {
  if (pet === "cat") {
    return {
      species: "cat",
      name: name,
      eat: function () {
        console.log(`${this.name} eats.`);
      },
      walk: function () {
        console.log(`${this.name} walks.`);
      },
      sleep: function () {
        console.log(`${this.name} sleeps.`);
      },
    } as Cat;
  } else if (pet === "dog") {
    return {
      species: "dog",
      name: name,
      eat: function () {
        console.log(`${this.name} eats.`);
      },
      walk: function () {
        console.log(`${this.name} walks.`);
      },
      sleep: function () {
        console.log(`${this.name} walks.`);
      },
    } as Dog;
  } else {
    throw `error`;
  }
}

function petIsCat(pet: Pet): pet is Cat {
  return pet.species === "cat";
}

function petIsBird(pet: Pet): pet is Bird {
  return pet.species === "bird";
}

function playWithPet(pet: Pet) {
  if (petIsCat(pet)) {
    pet.eat();
    pet.sleep();
  } else if (petIsBird(pet)) {
    pet.eat();
    pet.sing();
    pet.sleep();
  }
}

let dog = buyPet("cat", "Rocky");
playWithPet(dog);
