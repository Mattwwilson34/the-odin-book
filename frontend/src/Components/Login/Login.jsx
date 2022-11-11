import './Login.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Login = ({ className }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // set fetch request options
      const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      };

      // POST login data
      const res = await fetch('http://localhost:8080/', reqOptions);

      if (res.status === 200) {
        setEmail('');
        setPassword('');
        setMessage('Login Successful.');
      } else {
        setMessage('Login failed.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUser = async () => {
    const response = await axios
      .get('http://localhost:8080/auth/user', { withCredentials: true })
      .catch((err) => {
        console.log('Not Authenticated prperly');
        console.log(err);
      });

    if (response && response.data) {
      console.log('User', response.data);
    }
  };

  const redirectToGoogleOAuth = () => {
    let timer = null;

    const googleLoginURL = 'http://localhost:8080/auth/google';
    const newWindow = window.open(
      googleLoginURL,
      '_blank',
      'width=500,height=600',
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('Yay Authenticated');
          fetchUser();
          if (timer) clearInterval(timer);
        }
      });
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeHolder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button submit text='Login' />
        <a href='https://www.google.com/'>Forgot Password</a>
        <hr />
        <Button submit={false} text='Create new account' />
        <GoogleButton onClick={redirectToGoogleOAuth} />
      </form>
      <div className='message'>{message ? <p>{message}</p> : null}</div>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

Login.defaultProps = {
  className: 'login',
};

export default Login;
