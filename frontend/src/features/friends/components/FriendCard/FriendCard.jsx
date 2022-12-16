import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import Button from '../../../../components/StyledComponents/Button';
import updateFriendshipStatus from '../../api/update-friendship-status';
import CardAvatar from '../StyledComponents/CardAvatar';
import CardContentContainer from '../StyledComponents/CardContentContainer';

const FriendCard = ({ src, friend, user }) => {
  //
  const queryClient = useQueryClient();
  //
  const { userID: friendID } = friend;
  const { userID } = user;

  const handleClick = async (friendshipStatus) => {
    const friendShipObject = {
      userID,
      friendID,
      friendshipStatus,
    };
    await updateFriendshipStatus(friendShipObject);
    queryClient.invalidateQueries({ queryKey: 'friends' });
  };

  const { friendshipStatus } = friend;
  return (
    <CardContentContainer>
      <CardAvatar src={src} />
      <h2>{`${friend.firstName} ${friend.lastName}`}</h2>
      {friendshipStatus === '1' && (
        <Button
          backgroundColor='red'
          width='100%'
          onClick={() => handleClick('0')}
        >
          delete friend
        </Button>
      )}
      {friendshipStatus === '0' && (
        <Button width='100%' onClick={() => handleClick('2')}>
          send friend request
        </Button>
      )}
      {friendshipStatus === '2' && (
        <Button width='100%' onClick={() => handleClick('1')}>
          accept friend
        </Button>
      )}
    </CardContentContainer>
  );
};
FriendCard.propTypes = {
  src: PropTypes.string.isRequired,
  friend: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
export default FriendCard;
