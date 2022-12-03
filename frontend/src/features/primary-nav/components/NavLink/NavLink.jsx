import './NavLink.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ icon, activeURL }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const url = window.location.href;
    if (activeURL === url) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  if (active) {
    return (
      <a href={activeURL} className='NavLink_Container'>
        <div className='NavLink_Icon_Container noPointerEvents'>
          <img
            className='NavLink_Icon filterBlue'
            src={icon}
            alt='house icon'
          />
        </div>
        <div className='NavLink_Bottom_Border_Div border_blue' />
      </a>
    );
  }

  return (
    <a href={activeURL} className='NavLink_Container'>
      <div className='NavLink_Icon_Container'>
        <img className='NavLink_Icon' src={icon} alt='house icon' />
      </div>
      <div className='NavLink_Bottom_Border_Div' />
    </a>
  );
};

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  activeURL: PropTypes.string.isRequired,
};

export default NavLink;
