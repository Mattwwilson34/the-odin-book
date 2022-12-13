import db from '../database/database-connection.js';

const checkIfUserEmailInDB = async (userEmail) => {
  const sql = `SELECT * FROM Users WHERE email= ?`;

  const [results] = await db.execute(sql, [userEmail]);

  if (results.length > 0) return true;

  return false;
};

export default checkIfUserEmailInDB;
