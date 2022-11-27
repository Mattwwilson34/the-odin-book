import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import ProfileHeader from '../Components/Profile-Components/ProfileHeader/ProfileHeader';
import ProfileBody from '../Components/Profile-Components/PofileBody/PofileBody';

const Profile = () => {
  const { state: user } = useLocation();
  return (
    <div>
      <Navbar user={user} />
      <ProfileHeader user={user} />
      <ProfileBody />
    </div>
  );
};

export default Profile;
