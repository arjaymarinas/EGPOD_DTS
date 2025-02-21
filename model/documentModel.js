import { query } from '../config/db.js';

export const insertDocument = async (documentCode, documentTitle, documentDesc, documentCategory) => {
  console.log(documentCategory);
  try {
    const queryText = `
    INSERT INTO document (code, title, description, file, status, date_created, category_ids)
    VALUES ($1, $2, $3, $4, $5, NOW(), $6) RETURNING *;`;
    
    const numericCategory = Array.isArray(documentCategory) 
    ? documentCategory.map(Number) 
    : [Number(documentCategory)];

    //console.log(documentCategory);

    const values = [documentCode, documentTitle, documentDesc, null, 'New', JSON.stringify(numericCategory)];
    //console.log(values);
    const result = await query(queryText, values);

    return result.rows[0]; // Return the inserted row

  } catch (error) {
    throw new Error('Service Error: ' + error.message);
  }
};

export const getDocuments = async () => {
  const result = await query("SELECT * FROM document");
  return result.rows; // Return all rows
};

export const getUserById = async (id) => {
  const queryText = "SELECT * FROM users WHERE userid = $1";
  const result = await query(queryText, [id]);
  return result.rows[0]; // Return the user data
};
