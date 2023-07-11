"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const account_1 = require("../domain/model/account");
class AccountController {
    constructor() {
        this.accounts = [];
    }
    createAccount(account) {
        if (this.existAccount(account.numberAccount)) {
            throw new Error("Account already exists");
        }
        this.accounts.push(new account_1.Account(account.numberAccount, account.balance, account.person));
        return account;
    }
    depositAccount(account, amount) {
        this.accounts.forEach(acc => {
            if (account.numberAccount === acc.numberAccount) {
                acc.deposit(amount);
            }
        });
    }
    withdrawAccount(account, amount) {
        this.accounts.forEach(acc => {
            if (account.numberAccount === acc.numberAccount) {
                acc.withdraw(amount);
            }
        });
    }
    viewAccounts() {
        this.accounts.forEach((account) => console.log(account));
    }
    existAccount(numberAccount) {
        const account = this.accounts.filter((account) => account.numberAccount === numberAccount)[0];
        return !!(account);
    }
}
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map