import './LeftSidebar.css';
import React from 'react';
import PropTypes from 'prop-types';
import NavBubble from '../NavBubble/NavBubble';
import friends from '../../assets/icons/friends.svg';
import calendar from '../../assets/icons/calendar.svg';
import groups from '../../assets/icons/group.svg';

const LeftSidebar = ({ user }) => (
  <div className='Left_Sidebar'>
    <div className='Left_Sidebar_Link_Container'>
      <NavBubble
        avatar
        icon={user.profilePicture}
        altText='avatar'
        openProfile
      />
      <span>{`${user.firstName} ${user.lastName}`}</span>
    </div>
    <div className='Left_Sidebar_Link_Container'>
      <img src={friends} alt='friends' />
      <span>Friends</span>
    </div>
    <div className='Left_Sidebar_Link_Container'>
      <img src={calendar} alt='calendar' />
      <span>Events</span>
    </div>
    <div className='Left_Sidebar_Link_Container'>
      <img src={groups} alt='group of people' />
      <span>Groups</span>
    </div>
    <hr />
    <div className='Left_Sidebar_Shortcuts_Container'>
      <span className='Left_Sidebar_Shortcuts_Header'>Your Short Cuts</span>
      <p>To be populated with upcoming events once that feature is added</p>
    </div>
  </div>
);

LeftSidebar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default LeftSidebar;
