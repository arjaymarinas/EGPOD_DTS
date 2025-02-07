import { createDocument } from "../services/documentServices.js";

export const newDocument = async (req, res) => {
    const { documentCode, documentOrigin, documentInOut, documentCategory, documentTitle, documentDesc, documentActionRequest } = req.body;

    try {
        await createDocument(documentCode, documentOrigin, documentInOut, documentCategory, documentTitle, documentDesc, documentActionRequest);
        
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
