import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFriendsData from '../../../friends/hooks/useFriendsData';
import FriendsContainer from '../StyledComponents/FriendsContainer';

const FriendContainer = styled(Link)`
  flex: 1 1 125px;
  color: black;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
    color: black;
  }
`;

const FriendPhoto = styled.div`
  background-image: url(${({ url }) => url});
  flex: 1 1 125px;
  aspect-ratio: 1 / 1;
  background-position: center center;
  background-size: cover;
  border: 1px solid black;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'klavika-medium';

  & > a {
    font-size: 1.25rem;
  }

  & > div {
    display: block;
    width: 100%;
  }
`;

const Friends = ({ profile }) => {
  const { data, isLoading } = useFriendsData(profile.userID);

  if (isLoading) return <h1>Loading photos</h1>;

  if (data) {
    const { friends } = data.data;
    const reducedFriends = friends.slice(0, 9);

    return (
      <FriendsContainer>
        <Header>
          Friends
          <Link to='/'>See all friends</Link>
          <div>{friends.length}</div>
        </Header>
        {reducedFriends.map((friend) => (
          <FriendContainer to={`/profile/${friend.userID}`}>
            <FriendPhoto
              profile={profile}
              url={friend.profilePicture}
              key={friend.userID}
            />
            <span>
              <b>{`${friend.firstName} ${friend.lastName}`}</b>
            </span>
          </FriendContainer>
        ))}
      </FriendsContainer>
    );
  }
  return false;
};

Friends.propTypes = {
  profile: PropTypes.object.isRequired,
};
export default Friends;
