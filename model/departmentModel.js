import { query } from '../config/db.js';

export const getDepartments = async () => {
    try {
        const result = await query("SELECT * FROM department");
        return result.rows; 
    } catch (error) {
        throw new Error('Error fetching department list.');
    }
}