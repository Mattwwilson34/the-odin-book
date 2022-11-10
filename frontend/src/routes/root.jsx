import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import checkIfLoggedIn from '../modules/checkIfLoggedIn';
import Button from '../Components/Button/Button';

const Root = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // CHECK IF USER IS LOGGED IN
  useEffect(() => {
    (async () => {
      const response = await checkIfLoggedIn();
      if (response && response.data) {
        console.log('User', response.data);
        setUser(response.data.displayName);
        setIsLoggedIn('true');
      }
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to The Odin Book</h1>
      <a href='http://localhost:3000/login'>login</a>

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
