import { useLocation } from 'react-router-dom';
import useFriendsData from '../features/friends/hooks/useFriendsData';
import Navbar from '../features/primary-nav';
import Friends from '../features/friends';

const friendsPage = () => {
  const { state } = useLocation();
  const { user } = state;

  const {
    data: friends,
    isLoading,
    isError,
    error,
  } = useFriendsData(user.userID);

  if (isLoading) return <h1>Loading friends...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  if (friends) console.log(friends);

  return (
    <div>
      <Navbar user={user} />
      <Friends friends={friends} user={user} />
    </div>
  );
};

export default friendsPage;
