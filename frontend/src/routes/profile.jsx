import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import ProfileHeader from '../Components/Profile-Components/ProfileHeader/ProfileHeader';

const Profile = () => {
  const { state: user } = useLocation();
  return (
    <div>
      <Navbar user={user} />
      <ProfileHeader user={user} />
    </div>
  );
};

export default Profile;
