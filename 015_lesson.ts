// types of class

/**
 * abstrct class
 *    1. they can implement methods of their own
 *    2. they can define methods that inheriting classes must implement
 *    3. we can't do this eg: new Machine("Condo");
 */
abstract class Machine {
  constructor(public manafacture: string) {}

  summary(): string {
    return `${this.manafacture} makes this machine.`;
  }

  abstract moreInfo(): string;
}

class Car extends Machine {
  constructor(
    manufacture: string,
    public position: number,
    protected speed: number
  ) {
    super(manufacture);
  }

  move(): void {
    this.position += this.speed;
  }

  moreInfo(): string {
    return `This is a car located at ${this.position} and going ${this.speed} mph.`;
  }
}

const myCar = new Car("Konda", 10, 87);
myCar.move();
// console.log(myCar.summary());
// console.log(myCar.moreInfo());

// accessors with getter and setter

class Car2 {
  public position: number = 0;
  private _speed: number = 42;
  private _MAX_SPEED: number = 100;

  move(): void {
    this.position += this._speed;
  }

  get speed(): number {
    return this._speed;
  }

  set speed(value: number) {
    this._speed = Math.min(value, this._MAX_SPEED);
  }
}
