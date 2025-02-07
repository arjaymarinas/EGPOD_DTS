import { query } from '../config/db.js';

export const insertDocument = async (documentCode, documentTitle, documentDesc, documentCategory) => {
  try {

    const queryText = `
    INSERT INTO document (document_code, document_title, document_desc, document_file, document_status, date_created, category_ids)
    VALUES ($1, $2, $3, $4, $5, NOW(), $6) RETURNING *;`;

    const values = [documentCode, documentTitle, documentDesc, null, 'New', documentCategory];
    const result = await query(queryText, values);

    return result.rows[0]; // Return the inserted row

  } catch (error) {

    throw new Error('Error inserting data into database');

  }
};

export const getUserById = async (id) => {
  const queryText = "SELECT * FROM users WHERE userid = $1";
  const result = await query(queryText, [id]);
  return result.rows[0]; // Return the user data
};
