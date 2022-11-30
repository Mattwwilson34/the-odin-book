import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import fetchUser from '../modules/fetchUser';
import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Timeline from '../components/Timeline/Timeline';
import StatusModal from '../components/StatusModal/StatusModal';

const Root = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [fetchPosts, setFetchPosts] = useState(true);

  // CHECK IF USER IS LOGGED IN ON PAGE LOAD
  useEffect(() => {
    (async () => {
      const response = await fetchUser();
      if (response && response.data) {
        setUser(response.data);
        setIsLoggedIn('true');
      }
    })();
  }, []);

  if (isLoggedIn) {
    // Show logged in UI
    return (
      <div>
        {statusModalOpen && (
          <StatusModal
            user={user}
            setStatusModalOpen={setStatusModalOpen}
            setFetchPosts={setFetchPosts}
          />
        )}
        <Navbar user={user} />
        <div className='Main_Content_Container'>
          <LeftSidebar user={user} />
          <div className='Timeline_Container'>
            <Timeline
              user={user}
              setStatusModalOpen={setStatusModalOpen}
              fetchPosts={fetchPosts}
              setFetchPosts={setFetchPosts}
            />
          </div>
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
