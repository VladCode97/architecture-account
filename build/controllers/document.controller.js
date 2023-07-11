"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentController = void 0;
const document_1 = require("../domain/model/document");
class DocumentController {
    constructor() {
        this.documents = [];
    }
    createDocument(document) {
        if (this.existDocument(document.numberDocument)) {
            throw new Error(`Document ${document.numberDocument} already exists`);
        }
        const documentIns = new document_1.Document(document.numberDocument, document.dateExpirationDocument, document.placeExpedition, document.dateBorn);
        this.documents.push(documentIns);
        return documentIns;
    }
    existDocument(numberDocument) {
        const document = this.documents.filter((doc) => doc.numberDocument === numberDocument)[0];
        return !!(document);
    }
    updateNumberDocument(oldDocument, newDocument) {
        this.documents.forEach((document) => {
            if (document.numberDocument === oldDocument) {
                document.numberDocument = newDocument;
                console.log(`Document ${document.numberDocument} updated successfully`);
            }
        });
    }
    viewAllDocuments() {
        this.documents.forEach(document => console.log(document));
    }
}
exports.DocumentController = DocumentController;
//# sourceMappingURL=document.controller.js.map