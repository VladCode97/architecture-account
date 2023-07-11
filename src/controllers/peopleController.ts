import {PersonType} from "../domain/types/person.type";
import {Person} from "../domain/model/person";

export class PeopleController {

    private readonly people: Person[];

    constructor() {
        this.people = [];
    }

    createPerson(person: PersonType): Person{
        if (this.existPerson(person.document.numberDocument)) {
            throw new Error('Person already exists');
        }
        const result = new Person(person.name, person.age, person.gender, person.document)
        this.people.push(result);
        return result;
    }

    viewPeople(): Array<PersonType> {
        if (this.people.length > 0) {
            return this.people;
        }
    }

    viewByName(name: string): PersonType {
        return this.people.filter((p) => p.name === name)[0];
    }


    existPerson(numberDocument: number): boolean {
        const person = this.people.filter((doc) => doc.document.numberDocument === numberDocument)[0];
        return !!(person);
    }

}