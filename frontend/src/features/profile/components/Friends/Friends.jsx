import Avatar from 'boring-avatars';
import FriendsContainer from '../StyledComponents/FriendsContainer';

const seedFriends = (numerOfFriends = 9) => {
  const friendsArray = [];
  for (let i = 0; i < numerOfFriends; i += 1) {
    friendsArray.push(
      <Avatar
        size={130}
        square='true'
        name='Maria Mitchell'
        variant='beam'
        colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
      />,
    );
  }
  return friendsArray;
};

const Friends = () => (
  <FriendsContainer>{seedFriends().map((friend) => friend)}</FriendsContainer>
);

export default Friends;
