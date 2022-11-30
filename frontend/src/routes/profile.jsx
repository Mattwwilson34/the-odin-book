import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ProfileHeader from '../components/Profile-Components/ProfileHeader/ProfileHeader';
import ProfileBody from '../components/Profile-Components/PofileBody/PofileBody';

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
