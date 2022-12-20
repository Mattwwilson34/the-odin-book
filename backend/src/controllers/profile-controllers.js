import db from '../database/database-connection.js';

const getProfile = async (req, res) => {
  const { userID } = req.params;

  const sql = `SELECT * FROM Users WHERE userID= ?`;

  const [user] = await db.execute(sql, [userID]);

  const photoSql = `SELECT photoID, photoURL FROM UserPhoto WHERE userID = ?`;

  const [userPhotos] = await db.execute(photoSql, [userID]);

  const combinedData = {
    ...user[0],
    userPhotos,
  };

  res.send(combinedData);
};

export default getProfile;
