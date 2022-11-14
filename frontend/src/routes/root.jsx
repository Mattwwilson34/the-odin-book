import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import fetchUser from '../modules/fetchUser';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar';
import RightSidebar from '../Components/RightSidebar/RightSidebar';
import Timeline from '../Components/Timeline/Timeline';

const Root = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // CHECK IF USER IS LOGGED IN ON PAGE LOAD
  useEffect(() => {
    (async () => {
      const response = await fetchUser();
      if (response && response.data) {
        console.log('User', response.data);
        setUser(response.data);
        setIsLoggedIn('true');
      }
    })();
  }, []);

  if (isLoggedIn) {
    // Show logged in UI
    return (
      <div>
        <Navbar />
        <div className='Main_Content_Container'>
          <LeftSidebar />
          <Timeline />
          <RightSidebar />
        </div>
        <Outlet />
      </div>
    );
  }
  // Display login UI
  return <Login />;
};

export default Root;
