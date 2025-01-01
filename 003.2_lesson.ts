// Basic Class
class Family {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  celebrate(): void {
    console.log(
      `${this.name} is celebrating the party for Happy New Year 2025.`
    );
  }
}

const family = new Family("Justin Family");
family.celebrate();

// Access Modifiers
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
