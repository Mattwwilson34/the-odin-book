import './NavBubble.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBubble = ({ icon, altText, avatar, openProfile, user }) => {
  //
  const navigate = useNavigate();

  const redirectToProfile = () => {
    console.log('user', user);
    return openProfile ? navigate('/profile', { state: user }) : false;
  };

  return (
    <div
      className='NavBubble'
      onClick={redirectToProfile}
      onKeyPress={() => false}
      role='button'
      tabIndex='0'
    >
      <img
        className={avatar ? 'Nav_Bubble_Avatar' : 'Nav_Bubble_Icon'}
        src={icon}
        alt={altText}
        referrerPolicy='no-referrer'
      />
    </div>
  );
};

NavBubble.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  avatar: PropTypes.bool.isRequired,
  openProfile: PropTypes.bool,
  user: PropTypes.object,
};

NavBubble.defaultProps = {
  openProfile: false,
  user: {},
};

export default NavBubble;
