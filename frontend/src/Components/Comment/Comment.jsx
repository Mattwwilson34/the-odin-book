import './Comment.css';
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import axios from 'axios';
import PropTypes from 'prop-types';
import NavBubble from '../NavBubble/NavBubble';

const Comment = ({ commentData, userID, setFetchPosts }) => {
  //
  // State
  const [isCommentLiked, setIsCommentLiked] = useState(false);
  const [postCommentData, setPostCommentData] = useState(false);
  const isMounted = useRef(false);

  const {
    commentUserData,
    postCommentID,
    commentLikes,
    commentText,
    createdDateTime,
  } = commentData;

  const { firstName, lastName, profilePicture } = commentUserData[0];

  const handleLikeClick = () => {
    setIsCommentLiked((prev) => !prev);
    setPostCommentData(true);
  };

  const submitCommentLike = async () => {
    const commentLikeURL = 'http://localhost:8080/api/commentLike';

    const commentLikeData = {
      postCommentID,
      userID,
      liked: isCommentLiked,
    };

    try {
      const response = await axios.post(commentLikeURL, commentLikeData);
      setFetchPosts(true);
      console.log(response.data.message);
    } catch (err) {
      if (err) throw err;
    }
  };

  useEffect(() => {
    if (isMounted.current && postCommentData) {
      submitCommentLike();
      setPostCommentData(false);
    } else {
      isMounted.current = true;
    }
  }, [isCommentLiked]);

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
          <button
            type='button'
            className={
              isCommentLiked
                ? 'Comment_Button_Container_Btn color_blue'
                : 'Comment_Button_Container_Btn'
            }
            onClick={handleLikeClick}
          >
            {' '}
            {`like (${commentLikes.length})`}
          </button>
          <button type='button' className='Comment_Button_Container_Btn'>
            Reply
          </button>
          <button type='button' className='Comment_Button_Container_Btn'>
            {moment(createdDateTime).fromNow()}
          </button>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  commentData: PropTypes.shape({
    commentUserData: PropTypes.array.isRequired,
    postCommentID: PropTypes.string.isRequired,
    commentLikes: PropTypes.array.isRequired,
    commentText: PropTypes.string.isRequired,
    createdDateTime: PropTypes.string.isRequired,
  }).isRequired,
  userID: PropTypes.string.isRequired,
  setFetchPosts: PropTypes.func.isRequired,
};

export default Comment;
