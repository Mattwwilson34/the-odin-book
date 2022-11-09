import axios from 'axios';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../Components/Button/Button';

const Root = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  (async () => {
    const response = await axios
      .get('http://localhost:8080/auth/user', { withCredentials: true })
      .catch((err) => {
        console.log('Not Authenticated prperly');
        console.log(err);
      });

    if (response && response.data) {
      console.log('User', response.data);
      setUser(response.data.displayName);
      setIsLoggedIn('true');
    }
  })();
  return (
    <div>
      <h1>Welcome to The Odin Book</h1>

      {user && <h1>{`Welcome ${user}`}</h1>}

      {!user && (
        <h2>
          The user is
          {isLoggedIn ? ' currently ' : ' not '}
          logged in.
        </h2>
      )}

      {user && (
        <a href='http://localhost:8080/auth/logout'>
          <Button submit={false} text='Logout' />
        </a>
      )}

      <Outlet />
    </div>
  );
};

export default Root;
