// Intersection Type
interface Knife {
  cut(): void;
}

interface BottleOpener {
  openBottle(): void;
}

interface Screwdriver {
  turnScrew(): void;
}

type SwissArmyKnife = Knife & BottleOpener & Screwdriver;

function use(tool: SwissArmyKnife): void {
  console.log("I can do anything.");

  tool.cut();
  tool.openBottle();
  tool.turnScrew();
}
