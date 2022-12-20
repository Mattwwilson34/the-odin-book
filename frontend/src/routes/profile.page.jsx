import { useParams } from 'react-router-dom';
import useUserData from '../hooks/useUserData';
import useProfileData from '../features/profile/hooks/useProfileData';
import Navbar from '../features/primary-nav/components/Navbar';
import Profile from '../features/profile';

const ProfilePage = () => {
  const { userID } = useParams();

  const {
    data: user,
    userError,
    isError: isUserError,
    isLoading: userIsLoading,
  } = useUserData();

  const {
    data: profile,
    error: profileError,
    isError: isProfileError,
    isLoading: profileIsLoading,
  } = useProfileData(userID);

  if (userIsLoading || profileIsLoading) return <h1>Loading Profile...</h1>;

  if (isUserError || isProfileError)
    return (
      <h1>
        {userError}
        {profileError}
      </h1>
    );

  if (user && profile) {
    const { userID: activeUserID } = user.data;
    const { userID: profileID } = profile.data;

    return (
      <div>
        {console.log({ activeUserID, profileID })}
        <Navbar user={user.data} />
        <Profile
          user={user}
          admin={activeUserID === profileID}
          profile={profile.data}
        />
      </div>
    );
  }
  return false;
};

export default ProfilePage;
