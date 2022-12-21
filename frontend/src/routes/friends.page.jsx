import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useProfileData from '../features/profile/hooks/useProfileData';
import useActiveUser from '../hooks/useActiveUser';
import Navbar from '../features/primary-nav';
import Friends from '../features/friends';
import getFriends from '../features/friends/api/getFriends';

const friendsPage = () => {
  const { userID } = useParams();

  let activeUser = null;

  const { data, isSuccess } = useActiveUser();

  if (isSuccess) {
    activeUser = data.data;
  }

  const {
    data: friends,
    isLoading: friendsIsLoading,
    isError: isFriendsError,
    error: friendsError,
  } = useQuery(['friends', data], () => getFriends(userID), {
    enabled: isSuccess,
  });

  const {
    data: profile,
    isLoading: profileIsLoading,
    isError: isProfileError,
    error: profileError,
  } = useProfileData(userID);

  if (friendsIsLoading || profileIsLoading) return <h1>Loading friends...</h1>;

  if (isFriendsError || isProfileError)
    return (
      <h1>
        {friendsError.message}
        {profileError.message}
      </h1>
    );

  if (friends && profile && activeUser) {
    return (
      <div>
        <Navbar user={activeUser} />
        <Friends
          friends={friends}
          user={activeUser}
          admin={activeUser.userID === userID}
        />
      </div>
    );
  }
  return false;
};

export default friendsPage;
