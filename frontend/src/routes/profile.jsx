import { useLocation } from 'react-router-dom';
import Navbar from '../features/primary-nav/components/Navbar';

const Profile = () => {
  const { state: user } = useLocation();
  return (
    <div>
      <Navbar user={user} />
    </div>
  );
};

export default Profile;
