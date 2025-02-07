import { query } from '../config/db.js';

export const insertTrackingData = async (documentId, documentOrigin, documentInOut, documentActionRequest) => {
    try {
        const queryText = `INSERT INTO public.tracker( document_id, department_id, in_out, action_request, date_created ) 
        VALUES ( $1, $2, $3, $4, NOW() ) RETURNING *;`;
        const values = [documentId, documentOrigin, documentInOut, documentActionRequest];
        const result = await(query(queryText, values));
        return result.rows[0];  
    } catch (error) {
        throw new Error('Error inserting data into database.');
    }
}