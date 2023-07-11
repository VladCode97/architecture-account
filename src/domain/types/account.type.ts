import {Person} from "../model/person";

export type AccountType = {
    numberAccount: number;
    dateCreationAccount?: Date;
    balance: number;
    person: Person;
}