import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../SearchBar';
import NavLink from '../NavLink';
import NavBubble from '../../../../components/NavBubble';

import './Navbar.css';

import facebookIcon from '../../../../assets/icons/facebook.svg';
import * as icons from '../../utils/icon-exports';

const Navbar = ({ user }) => (
  <div className='Navbar'>
    <div className='NavBar_Logo_Search_Container'>
      <img src={facebookIcon} alt='facebook icon' />
      <SearchBar />
    </div>
    <NavLink icon={icons.home} activeURL='http://localhost:3000/' />
    <div className='NavBubble_Container'>
      <NavBubble
        icon={icons.circle}
        altText='Menu cirlces icon'
        avatar={false}
      />
      <NavBubble
        icon={icons.messenger}
        altText='messenger icon'
        avatar={false}
      />
      <NavBubble icon={icons.bell} altText='bell icon' avatar={false} />
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
