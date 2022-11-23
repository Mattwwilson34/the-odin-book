import './Navbar.css';
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import NavLink from '../NavLink/NavLink';
import NavBubble from '../NavBubble/NavBubble';
import facebookIcon from '../../icons/facebook.svg';
import homeIcon from '../../icons/home.svg';
import menuIcon from '../../icons/menu-circles.svg';
import messengerIcon from '../../icons/messenger.svg';
import bellIcon from '../../icons/bell.svg';

// eslint-disable-next-line no-unused-vars
const Navbar = ({ user }) => (
  <div className='Navbar'>
    <div className='NavBar_Logo_Search_Container'>
      <img src={facebookIcon} alt='facebook icon' />
      <SearchBar />
    </div>
    <NavLink icon={homeIcon} activeURL='http://localhost:3000/' />
    <div className='NavBubble_Container'>
      <NavBubble icon={menuIcon} altText='Menu cirlces icon' avatar={false} />
      <NavBubble icon={messengerIcon} altText='messenger icon' avatar={false} />
      <NavBubble icon={bellIcon} altText='bell icon' avatar={false} />
      <NavBubble icon={user.profilePicture} altText='avatar icon' avatar />
    </div>
  </div>
);

Navbar.propTypes = {
  user: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  user: {},
};

export default Navbar;
