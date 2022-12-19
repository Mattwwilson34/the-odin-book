import PropTypes from 'prop-types';
import FriendsContainer from '../StyledComponents/FriendsContainer';
import FriendCard from '../FriendCard/index';

const Friends = ({ friends, user }) => (
  <>
    <h2>Current Friends</h2>
    <hr />
    <FriendsContainer>
      {friends.data.friends.map((friend) => (
        <FriendCard
          src={friend.profilePicture}
          user={user}
          friend={friend}
          key={friend.username}
        />
      ))}
    </FriendsContainer>
    <h2>Potential Friends</h2>
    <hr />
    <FriendsContainer>
      {friends.data.notFriends.map((friend) => (
        <FriendCard
          src={friend.profilePicture}
          user={user}
          friend={friend}
          key={friend.username}
        />
      ))}
    </FriendsContainer>
    <h2>Pending Friends</h2>
    <hr />
    <FriendsContainer>
      {friends.data.pendingFriends.map((friend) => (
        <FriendCard
          src={friend.profilePicture}
          user={user}
          friend={friend}
          key={friend.username}
        />
      ))}
    </FriendsContainer>
  </>
);

Friends.propTypes = {
  friends: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Friends;
