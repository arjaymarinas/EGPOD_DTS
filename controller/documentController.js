//import { createDocument } from "./services/documentServices.js";

export const createDocument = async (req, res) => {
    //const {}
    console.log(req.body);
    res.status(201).json({message: "Ukininam."});
}