import './Login.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
