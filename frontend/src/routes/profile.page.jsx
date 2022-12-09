import useUserData from '../hooks/useUserData';
import Navbar from '../features/primary-nav/components/Navbar';
import Profile from '../features/profile';

const ProfilePage = () => {
  const { data: user, error, isError, isLoading } = useUserData();

  if (isLoading) return <h1>Loading Profile...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  return user ? (
    <div>
      <Navbar user={user.data} />
      <Profile user={user} />
    </div>
  ) : (
    ''
  );
};

export default ProfilePage;
