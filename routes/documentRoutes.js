import express from "express";
import { newDocument } from "../controller/documentController.js";

const router = express.Router();

router.post('/document/insert', newDocument);

export default router;