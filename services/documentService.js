import { insertDocument, getDocuments } from "../model/documentModel.js";
import { insertTrackingData } from "../model/trackingModel.js"

export const createDocument = async(documentCode, documentOrigin, documentInOut, documentCategory, documentTitle, documentDesc, documentDateTime, documentActionRequest) =>
{
    
    try {
        //Validation Logic here

        //Insert new data to [document] table
        const documentData = await insertDocument(documentCode, documentTitle, documentDesc, documentCategory);
        const documentId = documentData.id; // Id of newly inserted document
        //console.log(documentData);
        //Insert new data to [tracker] table
        const trackingData = await insertTrackingData(documentId, documentOrigin, documentInOut, documentDateTime, documentActionRequest)
        //console.log(documentCode);
    } catch (error) {
        throw new Error('Service Error: ' + error.message);
    }
}

export const fetchAllDocuments = async() => {
    return await getDocuments();
}