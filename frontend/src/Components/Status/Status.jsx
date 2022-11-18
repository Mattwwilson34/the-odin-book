import './Status.css';
import React from 'react';
import PropTypes from 'prop-types';
import NavBubble from '../NavBubble/NavBubble';
import photoVideoCard from '../../icons/photo-video-card.svg';
import smileyFace from '../../icons/smiley-face.svg';

const Status = ({ user }) => (
  <div className='Status_Container'>
    <div className='Status_Input_Container'>
      <NavBubble icon={user.profilePicture} altText='avatar icon' avatar />
      <button className='Status_Input_Button' type='button'>
        {`What's on your mind ${user.firstName}`}
      </button>
    </div>
    <hr />
    <div className='Status_Icon_Container'>
      <span className='Status_Icon_Wrapper'>
        <img src={photoVideoCard} alt='card with landscape' />
      </span>
      <span className='Status_Icon_Wrapper'>
        <img src={smileyFace} alt='smiley face' />
      </span>
    </div>
  </div>
);

Status.propTypes = {
  user: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
  }),
};

Status.defaultProps = {
  user: {},
};

export default Status;
