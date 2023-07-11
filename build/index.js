"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_controller_1 = require("./controllers/document.controller");
const peopleController_1 = require("./controllers/peopleController");
const gender_1 = require("./domain/enums/gender");
const account_controller_1 = require("./controllers/account.controller");
const documentController = new document_controller_1.DocumentController();
const peopleController = new peopleController_1.PeopleController();
const accountController = new account_controller_1.AccountController();
const documentLuis = documentController.createDocument({
    numberDocument: 1144200150,
    placeExpedition: 'Cali',
    dateExpirationDocument: new Date(2015, 3, 31),
    dateBorn: new Date(1997, 2, 4),
});
const luis = peopleController.createPerson({
    name: 'Luis',
    age: 26,
    gender: gender_1.Gender.MALE,
    document: documentLuis
});
const accountLuis = accountController.createAccount({
    numberAccount: 5432123223432332,
    person: luis,
    balance: 0
});
console.log('--------------------------------');
accountController.viewAccounts();
console.log('--------------------------------');
accountController.depositAccount(accountLuis, 78745525);
console.log('--------------------------------');
accountController.viewAccounts();
console.log('--------------------------------');
accountController.withdrawAccount(accountLuis, 4748745525);
console.log('--------------------------------');
accountController.viewAccounts();
//# sourceMappingURL=index.js.map