"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const person_1 = require("../domain/model/person");
class PersonController {
    constructor() {
        this.people = [];
    }
    createPerson(person) {
        this.people.push(new person_1.Person(person.name, person.age, person.gender, person.document));
        return person;
        //throw new Error('Person already exists');
    }
    viewPeople() {
        if (this.people.length > 0) {
            return this.people;
        }
    }
    viewByName(name) {
        return this.people.filter((p) => p.name === name)[0];
    }
}
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map