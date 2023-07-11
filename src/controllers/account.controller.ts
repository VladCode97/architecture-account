import {Account} from "../domain/model/account";
import {AccountType} from "../domain/types/account.type";

export class AccountController {
    private readonly accounts: Account[];

    constructor() {
        this.accounts = [];
    }

    createAccount(account: AccountType): AccountType {
        if (this.existAccount(account.numberAccount)) {
            throw new Error("Account already exists");
        }
        this.accounts.push(new Account(account.numberAccount, account.balance, account.person));
        return account;
    }

    depositAccount(account: AccountType, amount: number) {
        this.accounts.forEach(acc => {
            if (account.numberAccount === acc.numberAccount) {
                acc.deposit(amount);
            }
        })
    }

    withdrawAccount(account: AccountType, amount: number) {
        this.accounts.forEach(acc => {
            if (account.numberAccount === acc.numberAccount) {
                acc.withdraw(amount);
            }
        })
    }

    viewAccounts(): void {
        this.accounts.forEach((account) => console.log(account));
    }

    existAccount(numberAccount: number): boolean {
        const account = this.accounts.filter((account) => account.numberAccount === numberAccount)[0];
        return !!(account);
    }

}