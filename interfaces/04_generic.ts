interface IStatus<U> {
  code: U;
}

interface IEvent<T> {
  list: T[];
  emit(event: T): void;
  getAll(): T[];
}

class State<T> implements IEvent<T> {
  list: T[];

  constructor() {
    this.list = [];
  }

  emit(event: T): void {
    this.list.push(event);
  }

  getAll(): T[] {
    return this.list;
  }
}

const s = new State<IStatus<number>>();

s.emit({ code: 200 });
