"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleController = void 0;
const person_1 = require("../domain/model/person");
class PeopleController {
    constructor() {
        this.people = [];
    }
    createPerson(person) {
        if (this.existPerson(person.document.numberDocument)) {
            throw new Error('Person already exists');
        }
        const result = new person_1.Person(person.name, person.age, person.gender, person.document);
        this.people.push(result);
        return result;
    }
    viewPeople() {
        if (this.people.length > 0) {
            return this.people;
        }
    }
    viewByName(name) {
        return this.people.filter((p) => p.name === name)[0];
    }
    existPerson(numberDocument) {
        const person = this.people.filter((doc) => doc.document.numberDocument === numberDocument)[0];
        return !!(person);
    }
}
exports.PeopleController = PeopleController;
//# sourceMappingURL=peopleController.js.map