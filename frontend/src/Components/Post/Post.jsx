import './Post.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import PropTypes from 'prop-types';
import NavBubble from '../NavBubble/NavBubble';
import Comment from '../Comment/Comment';
import CommentInput from '../CommentInput/CommentInput';
import likeIcon from '../../icons/like.svg';
import commentIcon from '../../icons/comment.svg';
import forwardIcon from '../../icons/forward.svg';

const Post = ({ postData, user, setFetchPosts }) => {
  //
  // State
  const [commentInputOpen, setCommentInputOpen] = useState(false);
  const [postLiked, setPostLiked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const {
    postText,
    createdDateTime,
    firstName,
    lastName,
    profilePicture,
    expandedPostLikeData,
    commentData,
  } = postData;

  const numPostLikes = expandedPostLikeData.length;

  const submitPostLike = async () => {
    const postLikeURL = 'http://localhost:8080/api/postLike';

    const postLikeData = {
      postID: postData.postID,
      userID: user.userID,
      liked: postLiked,
    };

    try {
      const response = await axios.post(postLikeURL, postLikeData);
      setFetchPosts(true);
      console.log(response.data.message);
    } catch (err) {
      if (err) throw err;
    }
  };

  useEffect(() => {
    if (isMounted) {
      submitPostLike();
    } else {
      setIsMounted(true);
    }
  }, [postLiked]);

  const handleLikeClick = () => setPostLiked((prev) => !prev);
  const handleCommentClick = () => setCommentInputOpen((prev) => !prev);

  return (
    <div className='Post'>
      <div className='Post_Header_Container'>
        <NavBubble icon={profilePicture} avatar altText='avatar' />
        <div className='Post_Header_Text_Container'>
          <h3>{`${firstName} ${lastName}`}</h3>
          <div>{moment(createdDateTime).fromNow()}</div>
        </div>
      </div>
      <div className='Post_Body_Container'>
        <p>{postText}</p>
      </div>
      <div className='Post_Stats_Container'>
        <img src={likeIcon} alt='thumbs up' />
        {numPostLikes}
      </div>
      <hr />
      <div className='Post_Reactions_Container'>
        <div className='Post_Reaction_Text_Container'>
          <img src={likeIcon} alt='thumbs up' />
          <span className='Post_Reactions_Text'>Like</span>
        </div>
        <button
          type='button'
          onClick={handleClick}
          className='Post_Reaction_Comment_Btn'
        >
          <img src={commentIcon} alt='speach bubble' />
          <span className='Post_Reactions_Text'>Comment</span>
        </button>
        <div className='Post_Reaction_Text_Container'>
          <img src={forwardIcon} alt='arrow pointing right' />
          <span className='Post_Reactions_Text'>Share</span>
        </div>
      </div>
      <hr />
      <div className='Post_Comments_Container'>
        {commentData.map((comment) => (
          <Comment commentData={comment} key={comment.postCommentID} />
        ))}
        {commentInputOpen && (
          <CommentInput
            user={user}
            postID={postData.postID}
            setFetchPosts={setFetchPosts}
          />
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    postID: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
    createdDateTime: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    expandedPostLikeData: PropTypes.array.isRequired,
    commentData: PropTypes.array.isRequired,
  }).isRequired,
  user: PropTypes.object.isRequired,
  setFetchPosts: PropTypes.func.isRequired,
};

export default Post;
