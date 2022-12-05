/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as icons from '../../utils/icon-exports';

import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import Avatar from '../../../../components/Avatar';
import Span from '../../../../components/StyledComponents/Span';
import LikeButton from '../../../../components/StyledComponents/LikeButton';
import IconButton from '../../../../components/StyledComponents/IconButton';
import Comments from '../../../comments/components/Comments';
import CommentInput from '../../../comments/components/CommentInput/CommentInput';
import SpanContainer from '../StyledComponents/SpanContainer';
import ButtonContainer from '../StyledComponents/ButtonContainer';
import TimeSpan from '../StyledComponents/TimeSpan';

const Post = ({ postData, user }) => {
  const [commentInputOpen, setCommentInputOpen] = useState(false);

  const {
    postID,
    postText,
    createdDateTime,
    firstName,
    lastName,
    expandedPostLikeData,
    commentData,
  } = postData;

  const numPostLikes = expandedPostLikeData.length;

  const handleCommentClick = () => setCommentInputOpen((prev) => !prev);

  return (
    <ContentContainer border margin='20px 0' width='100%'>
      <Avatar user={user} />
      <SpanContainer>
        <Span>{`${firstName} ${lastName}`}</Span>
        <TimeSpan>{moment(createdDateTime).fromNow()}</TimeSpan>
      </SpanContainer>
      <ContentContainer fontSize='20px' width='100%' padding='10px 0'>
        {postText}
      </ContentContainer>
      <ButtonContainer>
        <LikeButton text={numPostLikes} disabled />
      </ButtonContainer>
      <hr />
      <ButtonContainer justify='space-around'>
        <LikeButton text='like' />
        <IconButton
          svg={icons.comment}
          text='comment'
          onClick={handleCommentClick}
        />
        <IconButton svg={icons.forward} text='share' />
      </ButtonContainer>
      <hr />
      {commentInputOpen && <CommentInput user={user} postID={postID} />}
      <Comments commentData={commentData} />
    </ContentContainer>
  );
};

Post.propTypes = {
  postData: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Post;
