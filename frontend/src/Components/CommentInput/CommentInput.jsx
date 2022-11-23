import './CommentInput.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import NavBubble from '../NavBubble/NavBubble';
import Input from '../Input/Input';

const CommentInput = ({ user, postID, setFetchPosts }) => {
  //
  // Sate
  // eslint-disable-next-line no-unused-vars
  const [commentText, setCommentText] = useState('');

  const submitComment = async () => {
    const commentURL = 'http://localhost:8080/api/comment';

    const comment = {
      userID: user.userID,
      postID,
      commentBody: commentText,
    };

    try {
      const response = await axios.post(commentURL, comment);
      setFetchPosts(true);
      console.log(response.data);
    } catch (err) {
      if (err) throw err;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      console.log(commentText);
      submitComment();
      setCommentText('');
      e.target.value = '';
    }
  };

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <div className='Comment_Input'>
      <div className='Comment_Input_Container'>
        <NavBubble
          avatar
          icon={user.profilePicture}
          altText='avatar'
          openProfile
          user={user}
        />
        <Input
          type='text'
          placeholder='Write a comment...'
          className='Comment_Input_Container_Input'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={commentText}
        />
      </div>
      <span className='Comment_Input_Tooltip'>Press Enter to post.</span>
    </div>
  );
};

CommentInput.propTypes = {
  user: PropTypes.object.isRequired,
  postID: PropTypes.string.isRequired,
  setFetchPosts: PropTypes.func.isRequired,
};

export default CommentInput;
