"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
class Document {
    constructor(numberDocument, dateExpirationDocument, placeExpedition, dateBorn) {
        this._numberDocument = numberDocument;
        this._dateExpirationDocument = dateExpirationDocument;
        this._placeExpedition = placeExpedition;
        this._dateBorn = dateBorn;
    }
    get numberDocument() {
        return this._numberDocument;
    }
    set numberDocument(value) {
        this._numberDocument = value;
    }
    get dateExpirationDocument() {
        return this._dateExpirationDocument;
    }
    set dateExpirationDocument(value) {
        this._dateExpirationDocument = value;
    }
    get placeExpedition() {
        return this._placeExpedition;
    }
    set placeExpedition(value) {
        this._placeExpedition = value;
    }
    get dateBorn() {
        return this._dateBorn;
    }
    set dateBorn(value) {
        this._dateBorn = value;
    }
}
exports.Document = Document;
//# sourceMappingURL=document.js.map