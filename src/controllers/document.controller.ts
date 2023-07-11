import {Document} from "../domain/model/document";
import {DocumentType} from "../domain/types/document.type";

export class DocumentController {
    private readonly documents: Document[];

    constructor() {
        this.documents = [];
    }

    createDocument(document: DocumentType): Document {
        if (this.existDocument(document.numberDocument)) {
            throw new Error(`Document ${document.numberDocument} already exists`);
        }
        const documentIns = new Document(document.numberDocument, document.dateExpirationDocument, document.placeExpedition, document.dateBorn);
        this.documents.push(documentIns);
        return documentIns;
    }

    existDocument(numberDocument: number): boolean {
        const document = this.documents.filter((doc) => doc.numberDocument === numberDocument)[0];
        return !!(document);
    }

    updateNumberDocument(oldDocument: number, newDocument: number): void {
        this.documents.forEach((document) => {
            if (document.numberDocument === oldDocument) {
                document.numberDocument = newDocument;
                console.log(`Document ${document.numberDocument} updated successfully`);
            }
        })
    }

    viewAllDocuments(): void {
        this.documents.forEach(document => console.log(document));
    }

}