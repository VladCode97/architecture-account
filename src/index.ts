import {DocumentController} from "./controllers/document.controller";
import {PeopleController} from "./controllers/peopleController";
import {Gender} from "./domain/enums/gender";
import {AccountController} from "./controllers/account.controller";

const documentController = new DocumentController();
const peopleController = new PeopleController();
const accountController = new AccountController();

const documentLuis = documentController.createDocument({
    numberDocument: 1144200150,
    placeExpedition: 'Cali',
    dateExpirationDocument: new Date(2015, 3, 31),
    dateBorn: new Date(1997, 2, 4),
});


const luis = peopleController.createPerson({
    name: 'Luis',
    age: 26,
    gender: Gender.MALE,
    document: documentLuis
});


const accountLuis = accountController.createAccount({
    numberAccount: 5432123223432332,
    person: luis,
    balance: 0
});

console.log('--------------------------------')
accountController.viewAccounts();
console.log('--------------------------------')
accountController.depositAccount(accountLuis, 78745525);
console.log('--------------------------------')
accountController.viewAccounts();
console.log('--------------------------------')
accountController.withdrawAccount(accountLuis, 48745525);
console.log('--------------------------------')
accountController.viewAccounts();