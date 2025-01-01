// Basic Class
var Family = /** @class */ (function () {
    function Family(name) {
        this.name = name;
    }
    Family.prototype.celebrate = function () {
        console.log("".concat(this.name, " is celebrating the party for Happy New Year 2025."));
    };
    return Family;
}());
var family = new Family("Justin Family");
family.celebrate();
// Access Modifiers
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
