import db from '../database/database-connection.js';

const getProfile = async (req, res) => {
  const { userID } = req.params;

  const sql = `SELECT * FROM Users WHERE userID= ?`;

  const [user] = await db.execute(sql, [userID]);

  const photoSql = `SELECT photoID, photoURL FROM UserPhoto WHERE userID = ?`;

  const [userPhotos] = await db.execute(photoSql, [userID]);

  const friendSql = `SELECT userIdTwo FROM Friends WHERE userIdOne = ? AND friendshipStatus = ?`;

  const [userFriends] = await db.execute(friendSql, [userID, '1']);

  const userFriendIDArray = [];

  userFriends.forEach((friendID) =>
    userFriendIDArray.push(`"${friendID.userIdTwo}"`),
  );

  const [friendData] = await db.execute(
    `SELECT userID, firstName, lastName, username, profilePicture FROM the_odin_book.Users WHERE userID IN (${userFriendIDArray})`,
  );

  const combinedData = {
    ...user[0],
    userPhotos,
    friendData,
  };

  res.send(combinedData);
};

export default getProfile;
