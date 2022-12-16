import db from '../database/database-connection.js';

const getFriendsController = async (req, res) => {
  const userID = req.params.userID;

  const [friends] = await db.execute(
    `SELECT * FROM the_odin_book.Friends WHERE userIdOne= ?`,
    [userID],
  );

  // FIX: if there are no friends returned then the app crashes
  //      must handle this issue

  const friendIDs = [];
  friends.forEach((friend) => {
    friendIDs.push(`"${friend.userIdTwo}"`);
  });

  const [friendData] = await db.execute(
    `SELECT userID, firstName, lastName, username, profilePicture FROM the_odin_book.Users WHERE userID IN (${friendIDs})`,
  );

  const friendDataPlusStatus = [];
  friendData.forEach((friend) => {
    friends.forEach((friendship) => {
      if (friend.userID !== friendship.userIdTwo) {
        return;
      } else {
        const updatedFriend = {
          ...friend,
          friendshipStatus: friendship.friendshipStatus,
        };
        friendDataPlusStatus.push(updatedFriend);
      }
    });
  });

  const sortedFriends = {
    friends: [],
    notFriends: [],
    pendingFriends: [],
  };

  friendDataPlusStatus.forEach((friend) => {
    if (friend.friendshipStatus === '0') {
      sortedFriends.notFriends.push(friend);
    } else if (friend.friendshipStatus === '1') {
      sortedFriends.friends.push(friend);
    } else {
      sortedFriends.pendingFriends.push(friend);
    }
  });

  res.send(sortedFriends);
};

const updateFriendsController = async (req, res) => {
  const { userID: userIdOne, friendID: userIdTwo, friendshipStatus } = req.body;

  const sql = `UPDATE friends SET friendshipStatus= "${friendshipStatus}" WHERE userIdOne= ? AND userIdTwo= ?`;

  await db.execute(sql, [userIdOne, userIdTwo]);

  res.sendStatus(200);
};

export { getFriendsController, updateFriendsController };
