import './GoogleButton.css';
import React from 'react';
import googleIcon from '../../icons/google.svg';
import redirectToGoogleOAuth from '../../modules/redirect-google-OAuth';

const GoogleButton = () => (
  <div
    className='GoogleButton_Container'
    role='button'
    tabIndex={0}
    onMouseOver={() => undefined}
    onMouseOut={() => undefined}
    onFocus={() => undefined}
    onBlur={() => undefined}
    onKeyDown={() => undefined}
    onClick={redirectToGoogleOAuth}
  >
    <div className='GoogleButton_Icon_Container'>
      <img className='GoogleButton_Icon' src={googleIcon} alt='google icon' />
    </div>
    <div className='GoogleButton_Text'>Sign in with Google</div>
  </div>
);

export default GoogleButton;
