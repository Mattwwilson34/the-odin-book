import './NavBubble.css';
import React from 'react';
import PropTypes from 'prop-types';

const NavBubble = ({ icon, altText, avatar }) => (
  <div className='NavBubble'>
    <img
      className={avatar ? 'Nav_Bubble_Avatar' : 'Nav_Bubble_Icon'}
      src={icon}
      alt={altText}
      referrerPolicy='no-referrer'
    />
  </div>
);

NavBubble.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  avatar: PropTypes.bool.isRequired,
};

export default NavBubble;
