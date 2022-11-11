import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import fetchUser from '../modules/fetchUser';
import Login from '../Components/Login/Login';

const Root = () => {
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
        <h1>Logged in</h1>
        <h2>{`Welcome ${user.first_name}`}</h2>
        <a href='http://localhost:8080/auth/logout'>LOGOUT</a>
        <Outlet />
      </div>
    );
  }
  // Display login UI
  return <Login />;
};

export default Root;
