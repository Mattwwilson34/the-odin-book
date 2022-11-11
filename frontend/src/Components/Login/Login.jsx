import './Login.css';
import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import GoogleButton from '../GoogleButton/GoogleButton';

const Login = () => (
  <div className='Login_Container'>
    <div className='Login_Header_Container'>
      <h1 className='Login_Header'>odinbook</h1>
      <h2 className='Login_Sub_Header'>
        Connect with friends and the world around you on Odenbook.
      </h2>
    </div>
    <form className='Login_Form'>
      <Input type='text' placeHolder='Email' />
      <Input type='password' placeholder='Password' />
      <Button submit text='Login' />
      <a href='https://www.google.com/'>Forgot Password?</a>
      <hr />
      <GoogleButton />
      <Button submit={false} text='Create new account' />
    </form>
  </div>
);

export default Login;
