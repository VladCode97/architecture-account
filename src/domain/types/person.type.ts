import {Gender} from "../enums/gender";
import {Document} from "../model/document";

export type PersonType = {
    name: string,
    age: number,
    gender: Gender,
    document: Document,
}