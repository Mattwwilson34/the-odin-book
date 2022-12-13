import db from '../database/database-connection.js';

const getFriendsController = async (req, res) => {
  const userID = req.params.userID;

  const [friends] = await db.execute(
    `SELECT * FROM the_odin_book.Friends WHERE userIdOne= ?`,
    [userID],
  );

  const friendIDs = [];
  friends.forEach((friend) => {
    friendIDs.push(`"${friend.userIdTwo}"`);
  });

  const [friendData] = await db.execute(
    `SELECT firstName, lastName, username, profilePicture FROM the_odin_book.Users WHERE userID IN (${friendIDs})`,
  );

  const friendDataPlusStatus = [];
  friendData.forEach((friend, index) => {
    const updatedFriend = {
      ...friend,
      friendshipStatus: friends[index].friendshipStatus,
    };
    friendDataPlusStatus.push(updatedFriend);
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

export { getFriendsController };
