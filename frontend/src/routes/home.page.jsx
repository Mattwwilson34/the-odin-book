import { Outlet } from 'react-router-dom';
import Login from '../features/login/components/Login';
import Navbar from '../features/primary-nav';
import LeftSidebar from '../features/leftsidebar';
import Timeline from '../features/timeline/components/Timeline/Timeline';

import useUserData from '../hooks/useUserData';

const HomePage = () => {
  const { data: user, error } = useUserData();

  if (user) {
    return (
      <div>
        <Navbar user={user.data} />
        <div className='Main_Content_Container'>
          <LeftSidebar user={user.data} />
          <Timeline user={user.data} />
          {/* <RightSidebar /> */}
        </div>
        <Outlet />
      </div>
    );
  }

  return error ? <Login /> : '';
};

export default HomePage;
