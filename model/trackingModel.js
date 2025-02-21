import { query } from '../config/db.js';

export const insertTrackingData = async (documentId, documentOrigin, documentInOut, documentDateTime, documentActionRequest) => {

    try {
        const queryText = `INSERT INTO public.tracker( document_id, department_id, in_out, action_request, in_out_date_time, date_created ) 
        VALUES ( $1, $2, $3, $4, $5, NOW() ) RETURNING *;`;

        const numericActionRequest = Array.isArray(documentActionRequest) 
        ? documentActionRequest.map(Number) 
        : [Number(documentActionRequest)];
        
        const values = [documentId, documentOrigin, documentInOut, JSON.stringify(numericActionRequest), documentDateTime, ];

        const result = await(query(queryText, values));
        return result.rows[0];  
    } catch (error) {
        throw new Error('Error inserting data into database.');
    }
}

export const getTrackRecords = async () => {
    try {
        const queryText = `
        WITH LatestTracker AS (
                SELECT 
                    document_id,
                    MAX(date_created) AS latest_date_created
                FROM tracker
                GROUP BY document_id
            )
            SELECT 
                d.title,
                d.status,
                d.category_ids,
                dep.code,
                dep.name,
                t.in_out,
                t.in_out_date_time,
                TO_CHAR(t.in_out_date_time, 'yyyy-mm-dd HH12:MI AM') AS cvrt_date_time,
                t.action_request,
                t.date_created
            FROM LatestTracker AS lt
            INNER JOIN tracker AS t 
                ON t.document_id = lt.document_id AND t.date_created = lt.latest_date_created
            LEFT JOIN document AS d 
                ON d.id = t.document_id
            LEFT JOIN department AS dep 
                ON dep.id = t.department_id;
        `;

        const result = await query(queryText);
        if (result.rows.length === 0) {
            console.log("No tracking records found in the database.");
            return []; // Return an empty array
        }
        return result.rows;
    } catch (error) {
        throw new Error('Error inserting data into database.');
    }
}
