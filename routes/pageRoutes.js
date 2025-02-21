import express from "express";
import { getAllDepartments } from "../controller/departmentController.js";
import { getAllCategories } from "../controller/documentCategoryController.js";
import { getAllActionCategories } from "../controller/actionCategoryController.js";
import { getAllDocuments } from "../controller/documentController.js";
import { getAllTrackRecords } from "../controller/trackingController.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const departments = await getAllDepartments();
    const categories = await getAllCategories();
    const actionCategories = await getAllActionCategories();
    const documents = await getAllDocuments();

    // Get title of documents
    const title = [];
    documents.forEach(element => {
        title.push(element.title);
    });

    res.render('home', { departments, categories, actionCategories, title });
    //console.log(documents);
});

router.get('/masterlist', async (req, res) => {
    const documents = await getAllTrackRecords();
    const actionCategories = await getAllActionCategories();
    
    res.render('masterlist', { documents, actionCategories });
    console.log(actionCategories);
});

export default router;