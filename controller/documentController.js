import { createDocument, fetchAllDocuments } from "../services/documentService.js";

export const newDocument = async (req, res) => {
    const { documentCode, documentOrigin, documentInOut, documentCategory, documentTitle, documentDesc, documentDateTime, documentActionRequest } = req.body;
    
    try {
        await createDocument(documentCode, documentOrigin, documentInOut, documentCategory, documentTitle, documentDesc, documentDateTime, documentActionRequest);
        console.log(documentCode);
        // Send success response
        res.status(201).json({
            ok: true,
            message: "Document created successfully",
        });
    } catch (error) {
        console.error("Error creating document:", error);

        // Send error response
        res.status(500).json({
            ok: false,
            message: "Failed to create document",
            error: error.message, // Optional: include error details
        });
    }
};

export const getAllDocuments = async (req, res) =>  {
    try {
        const documents = await fetchAllDocuments();
        return documents;
    } catch (error) {
        throw new Error("Error occured while trying to get the list of documents.");
    }
}
