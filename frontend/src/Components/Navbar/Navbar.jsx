import './Navbar.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import NavLink from '../NavLink/NavLink';
import NavBubble from '../NavBubble/NavBubble';
import facebookIcon from '../../icons/facebook.svg';
import homeIcon from '../../icons/home.svg';
import menuIcon from '../../icons/menu-circles.svg';
import messengerIcon from '../../icons/messenger.svg';
import bellIcon from '../../icons/bell.svg';
import avatarIcon from '../../icons/avatar.svg';

const Navbar = () => (
  <div className='Navbar'>
    <div className='NavBar_Logo_Search_Container'>
      <img src={facebookIcon} alt='facebook icon' />
      <SearchBar />
    </div>
    <NavLink icon={homeIcon} activeURL='http://localhost:3000/' />
    <div className='NavBubble_Container'>
      <NavBubble icon={menuIcon} altText='Menu cirlces icon' />
      <NavBubble icon={messengerIcon} altText='messenger icon' />
      <NavBubble icon={bellIcon} altText='bell icon' />
      <NavBubble icon={avatarIcon} altText='avatar icon' avatar />
    </div>
  </div>
);

export default Navbar;
