import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as commentAPI from '../../api/comment-api';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import Avatar from '../../../../components/Avatar';
import CommentTextInput from '../StyledComponents/commentTextInput';
import Span from '../../../../components/StyledComponents/Span';

const CommentInput = ({ user, postID }) => {
  const [commentText, setCommentText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      console.log(commentText);
      commentAPI.submitComment(user.userID, postID, commentText);
      setCommentText('');
      e.target.value = '';
    }
  };

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <ContentContainer width='100%'>
      <Avatar user={user} small />
      <CommentTextInput
        type='text'
        placeholder='Write a comment...'
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={commentText}
        margin='0 10px'
      />
      <Span fontSize='14px' width='100%' margin='0 0 0 50px'>
        press enter to submit comment...
      </Span>
    </ContentContainer>
  );
};

CommentInput.propTypes = {
  user: PropTypes.object.isRequired,
  postID: PropTypes.string.isRequired,
};

export default CommentInput;
