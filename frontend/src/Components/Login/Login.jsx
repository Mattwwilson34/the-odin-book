import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Login = ({ className }) => {
  return (
    <div className={className}>
      <form>
        <Input type='text' placeHolder='Email' />
        <Input type='password' placeholder='Password' />
        <Button submit text='Login' />
        <a href='https://www.google.com/'>Forgot Password</a>
        <hr />
        <Button submit={false} text='Create new account' />
      </form>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

Login.defaultProps = {
  className: 'text',
};

export default Login;
