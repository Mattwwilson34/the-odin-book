import './Status.css';
import React from 'react';
import NavBubble from '../NavBubble/NavBubble';
import avatarIcon from '../../icons/avatar.svg';
import photoVideoCard from '../../icons/photo-video-card.svg';
import smileyFace from '../../icons/smiley-face.svg';

const Status = () => (
  <div className='Status_Container'>
    <div className='Status_Input_Container'>
      <NavBubble icon={avatarIcon} altText='avatar icon' avatar />
      <button className='Status_Input_Button' type='button'>
        {`What's on your mind **UserName**`}
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

export default Status;
