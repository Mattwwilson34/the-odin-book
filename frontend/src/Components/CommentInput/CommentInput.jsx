import './CommentInput.css';
import React from 'react';
import PropTypes from 'prop-types';

import NavBubble from '../NavBubble/NavBubble';
import Input from '../Input/Input';

const CommentInput = ({ user }) => (
  <div className='Comment_Input'>
    <div className='Comment_Input_Container'>
      <NavBubble avatar icon={user.profilePicture} altText='avatar' />
      <Input type='text' placeholder='Write a comment...' />
    </div>
    <span className='Comment_Input_Tooltip'>Press Enter to post.</span>
  </div>
);

CommentInput.propTypes = {
  user: PropTypes.object.isRequired,
};

export default CommentInput;
