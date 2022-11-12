import './NavBubble.css';
import React from 'react';
import PropTypes from 'prop-types';

const NavBubble = ({ icon, altText }) => (
  <div className='NavBubble'>
    <img src={icon} alt={altText} />
  </div>
);

NavBubble.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default NavBubble;
