import express from "express";
import { createDocument } from "../controller/documentController.js";

const router = express.Router();

router.post('/document/insert', createDocument);

export default router;