import { query } from '../config/db.js';

export const getCategories = async() => {
    const result = await query("SELECT * FROM document_category");
    return result.rows;
}