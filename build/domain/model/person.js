"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age, gender, document) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._document = document;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get document() {
        return this._document;
    }
    set document(value) {
        this._document = value;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map