import './Status.css';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import NavBubble from '../NavBubble/NavBubble';
import photoVideoCard from '../../icons/photo-video-card.svg';
import smileyFace from '../../icons/smiley-face.svg';

const Status = ({ user, setStatusModalOpen }) => {
  const handleStatusButtonClick = useCallback(() => {
    setStatusModalOpen((prev) => !prev);
  }, [setStatusModalOpen]);

  return (
    <div className='Status_Container'>
      <div className='Status_Input_Container'>
        <NavBubble
          icon={user.profilePicture}
          user={user}
          altText='avatar icon'
          avatar
          openProfile
        />
        <button
          className='Status_Input_Button'
          type='button'
          onClick={handleStatusButtonClick}
        >
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
};

Status.propTypes = {
  user: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
  }),
  setStatusModalOpen: PropTypes.func.isRequired,
};

Status.defaultProps = {
  user: {},
};

export default Status;
