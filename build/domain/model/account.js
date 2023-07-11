"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(numberAccount, balance, person) {
        this._numberAccount = numberAccount;
        this._dateCreationAccount = new Date();
        this._balance = balance;
        this.person = person;
    }
    get person() {
        return this._person;
    }
    set person(value) {
        this._person = value;
    }
    get numberAccount() {
        return this._numberAccount;
    }
    set numberAccount(value) {
        this._numberAccount = value;
    }
    get dateCreationAccount() {
        return this._dateCreationAccount;
    }
    set dateCreationAccount(value) {
        this._dateCreationAccount = value;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
    deposit(amount) {
        console.log(`Balance before deposit: ${this.balance}`);
        this.balance += amount;
        console.log(`Balance after deposit: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this._balance) {
            throw new Error(`Cannot withdraw more than ${amount}`);
        }
        else {
            console.log(`Balance before deposit: ${this.balance}`);
            this.balance -= amount;
            console.log(`Balance after deposit: ${this.balance}`);
        }
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map