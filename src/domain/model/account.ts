import {Person} from "./person";

export class Account {

    private _numberAccount: number;
    private _dateCreationAccount: Date;
    private _balance: number;
    private _person: Person;


    constructor(numberAccount: number, balance: number, person: Person) {
        this._numberAccount = numberAccount;
        this._dateCreationAccount = new Date();
        this._balance = balance;
        this.person = person;
    }


    get person(): Person {
        return this._person;
    }

    set person(value: Person) {
        this._person = value;
    }

    get numberAccount(): number {
        return this._numberAccount;
    }

    set numberAccount(value: number) {
        this._numberAccount = value;
    }

    get dateCreationAccount(): Date {
        return this._dateCreationAccount;
    }

    set dateCreationAccount(value: Date) {
        this._dateCreationAccount = value;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }

    deposit(amount: number): void {
        console.log(`Balance before deposit: ${this.balance}`)
        this.balance += amount;
        console.log(`Balance after deposit: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this._balance) {
            throw new Error(`Cannot withdraw more than ${amount}`);
        } else {
            console.log(`Balance before deposit: ${this.balance}`)
            this.balance -= amount;
            console.log(`Balance after deposit: ${this.balance}`);
        }
    }
}