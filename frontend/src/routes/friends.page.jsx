import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
// import Avatar from '../components/Avatar';
// import ContentContainer from '../components/StyledComponents/ContentContainer';
// import Span from '../components/StyledComponents/Span';
import useFriendsData from '../features/friends/hooks/useFriendsData';
import Navbar from '../features/primary-nav';
import FriendCard from '../features/friends/components/FriendCard';

const FriendsContainer = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 20px;
`;

const friendsPage = () => {
  const { state } = useLocation();
  const { user } = state;

  const {
    data: friends,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useFriendsData(user.userID);

  if (isLoading) return <h1>Loading friends...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  if (friends) console.log(friends);

  return (
    <div>
      <Navbar user={user} />
      <h2>Current Friends</h2>
      <hr />
      <FriendsContainer>
        {isSuccess &&
          friends.data.friends.map((friend) => (
            <FriendCard src={friend.profilePicture} user={friend} />
          ))}
      </FriendsContainer>
      <h2>Potential Friends</h2>
      <hr />
      <FriendsContainer>
        {isSuccess &&
          friends.data.notFriends.map((friend) => (
            <FriendCard src={friend.profilePicture} user={friend} />
          ))}
      </FriendsContainer>
      <h2>Pending Friends</h2>
      <hr />
      <FriendsContainer>
        {isSuccess &&
          friends.data.pendingFriends.map((friend) => (
            <FriendCard src={friend.profilePicture} user={friend} />
          ))}
      </FriendsContainer>
    </div>
  );
};

export default friendsPage;
