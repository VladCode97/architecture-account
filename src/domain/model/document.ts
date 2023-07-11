export class Document {

    private _numberDocument: number;
    private _dateExpirationDocument: Date;
    private _placeExpedition: String;
    private _dateBorn: Date;


    constructor(numberDocument: number, dateExpirationDocument: Date, placeExpedition: String, dateBorn: Date) {
        this._numberDocument = numberDocument;
        this._dateExpirationDocument = dateExpirationDocument;
        this._placeExpedition = placeExpedition;
        this._dateBorn = dateBorn;
    }

    get numberDocument(): number {
        return this._numberDocument;
    }

    set numberDocument(value: number) {
        this._numberDocument = value;
    }

    get dateExpirationDocument(): Date {
        return this._dateExpirationDocument;
    }

    set dateExpirationDocument(value: Date) {
        this._dateExpirationDocument = value;
    }

    get placeExpedition(): String {
        return this._placeExpedition;
    }

    set placeExpedition(value: String) {
        this._placeExpedition = value;
    }

    get dateBorn(): Date {
        return this._dateBorn;
    }

    set dateBorn(value: Date) {
        this._dateBorn = value;
    }


}