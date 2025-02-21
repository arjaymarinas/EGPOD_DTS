import { query } from '../config/db.js';

export const getActionCategories = async () => {
    try {
        const result = await query("SELECT * FROM action_category");
        return result.rows;
    } catch (error) {
        throw new Error("Error fetching action category list."); 
    }
}
