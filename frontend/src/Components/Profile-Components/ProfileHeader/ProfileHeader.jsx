import './ProfileHeader.css';
import React from 'react';
import PropTypes from 'prop-types';
import NavBubble from '../../NavBubble/NavBubble';
import banner from '../../../assets/photos/cover-photo.jpg';

const ProfileHeader = ({ user }) => {
  const loop = () => {
    const components = [];
    for (let i = 0; i < 8; i += 1) {
      const iconURL = `http://localhost:8080/avatar-${i + 1}.svg`;
      components.push(<NavBubble icon={iconURL} altText='avatar' avatar />);
    }

    return components;
  };
  return (
    <div className='Profile_Header_Container'>
      <div className='Profile_Header_Banner_Container'>
        <div
          style={{
            backgroundImage: `url("${banner}")`,
          }}
          className='Profile_Header_Banner'
        />
      </div>
      <div className='Profile_Header_Row2'>
        <div className='Profile_Picture_Container'>
          <img src={user.profilePicture} alt='avatar' />
        </div>
        <div className='Profile_Header_Text'>
          <span className='Profile_Header_Text_Name'>{`${user.firstName} ${user.lastName}`}</span>
          <span className='Profile_Header_Text_Friends'>Friends 250</span>
          <div className='Profile_Header_Friends_Container'>
            {loop().map((bubble) => bubble)}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.object.isRequired,
};

ProfileHeader.defaultProps = {};
export default ProfileHeader;
