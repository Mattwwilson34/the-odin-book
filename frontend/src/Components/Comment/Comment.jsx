import './Comment.css';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import NavBubble from '../NavBubble/NavBubble';

const Comment = ({ commentData }) => {
  const { commentUserData, commentLikes, commentText, createdDateTime } =
    commentData;

  const { firstName, lastName, profilePicture } = commentUserData[0];

  return (
    <div className='Comment_Container'>
      <div className='Comment_Left_Column'>
        <NavBubble icon={profilePicture} avatar altText='avatar' />
      </div>
      <div className='Comment_Right_Column'>
        <div className='Comment_Text_Container'>
          <div className='Comment_Text_Header'>
            {firstName}
            {lastName}
          </div>
          <div className='Comment_Text_Body'>{commentText}</div>
        </div>
        <div className='Comment_Button_Container'>
          <a href='http://localhost:3000'>likes {commentLikes.length}</a>
          <a href='http://localhost:3000'>Reply</a>
          <a href='http://localhost:3000'>
            {moment(createdDateTime).fromNow()}
          </a>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  commentData: PropTypes.shape({
    commentUserData: PropTypes.array.isRequired,
    commentLikes: PropTypes.array.isRequired,
    commentText: PropTypes.string.isRequired,
    createdDateTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
