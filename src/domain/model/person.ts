import {Gender} from "../enums/gender";
import {Document} from "./document";

export class Person {

    private _name: string;
    private _age: number;
    private _gender: Gender;
    private _document: Document;


    constructor(name: string, age: number, gender: Gender, document: Document) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._document = document;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get document(): Document {
        return this._document;
    }

    set document(value: Document) {
        this._document = value;
    }

}