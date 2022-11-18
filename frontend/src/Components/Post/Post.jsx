import './Post.css';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import NavBubble from '../NavBubble/NavBubble';
import Comment from '../Comment/Comment';
import likeIcon from '../../icons/like.svg';
import commentIcon from '../../icons/comment.svg';
import forwardIcon from '../../icons/forward.svg';

const Post = ({ postData }) => {
  const { post_text: postText, create_datetime: createdTime } = postData;
  const {
    first_name: firstName,
    last_name: lastName,
    profile_picture: profilePicture,
  } = postData.userInfo;

  return (
    <div className='Post'>
      <div className='Post_Header_Container'>
        <NavBubble icon={profilePicture} avatar />
        <div className='Post_Header_Text_Container'>
          <h3>{`${firstName} ${lastName}`}</h3>
          <div>{moment(createdTime).fromNow()}</div>
        </div>
      </div>
      <div className='Post_Body_Container'>
        <p>{postText}</p>
      </div>
      <div className='Post_Stats_Container'>
        Matt Wilson, Lyra Olson and 105 others
      </div>
      <hr />
      <div className='Post_Reactions_Container'>
        <div className='Post_Reaction_Text_Container'>
          <img src={likeIcon} alt='thumbs up' />
          <span className='Post_Reactions_Text'>Like</span>
        </div>
        <div className='Post_Reaction_Text_Container'>
          <img src={commentIcon} alt='speach bubble' />
          <span className='Post_Reactions_Text'>Comment</span>
        </div>
        <div className='Post_Reaction_Text_Container'>
          <img src={forwardIcon} alt='arrow pointing right' />
          <span className='Post_Reactions_Text'>Share</span>
        </div>
      </div>
      <hr />
      <div className='Post_Comments_Container'>
        <Comment />
      </div>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    post_text: PropTypes.string.isRequired,
    create_datetime: PropTypes.string.isRequired,
    userInfo: {
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      profile_picture: PropTypes.string.isRequired,
    },
  }).isRequired,
};

export default Post;
