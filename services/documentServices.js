import { insertDocument } from "../model/documentModel.js";
import { insertTrackingData } from "../model/trackingModel.js"

export const createDocument = async(documentCode, documentOrigin, documentInOut, documentCategory, documentTitle, documentDesc, documentActionRequest) =>
{
    try {
        //Validation Logic here

        //Insert new data to [document] table
        const documentData = await insertDocument(documentCode, documentTitle, documentDesc, documentCategory);
        const documentId = documentData.document_id; // Id of newly inserted document
        console.log(documentData);
        //Insert new data to [tracker] table
        const trackingData = await insertTrackingData(documentId, documentOrigin, documentInOut, documentActionRequest)
        console.log(trackingData);

    } catch (error) {
        throw new Error('Service Error: ' + error.message);
    }
}