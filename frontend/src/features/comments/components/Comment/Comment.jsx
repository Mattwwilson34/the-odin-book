import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Avatar from '../../../../components/Avatar';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import ActionContainer from '../StyledComponents/ActionContainer';
import DataSpan from '../StyledComponents/DataSpan';

import CommentContainer from '../../../../components/StyledComponents/CommentContainer';
import Span from '../../../../components/StyledComponents/Span';

const Comment = ({ commentData }) => {
  const [liked, setliked] = useState(false);

  const { commentUserData, commentLikes, commentText, createdDateTime } =
    commentData;

  const { firstName, lastName } = commentUserData[0];

  const handleClick = () => setliked((prev) => !prev);

  const getLikeOrLikes = (numOfLikes) => {
    if (numOfLikes < 1 || numOfLikes > 1) return 'likes';
    return 'like';
  };

  return (
    <ContentContainer>
      <Avatar user={commentUserData[0]} small />
      <CommentContainer>
        <Span fontSize='1rem' bold>{`${firstName} ${lastName}`}</Span>
        <Span fontSize='1rem'>{commentText}</Span>
      </CommentContainer>
      <ActionContainer>
        <DataSpan onClick={handleClick} liked={liked} bold>
          {`${commentLikes.length} ${getLikeOrLikes(commentLikes.length)}`}
        </DataSpan>
        <DataSpan bold>Reply</DataSpan>
        <DataSpan>{moment(createdDateTime).fromNow()}</DataSpan>
      </ActionContainer>
    </ContentContainer>
  );
};

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
};

export default Comment;
