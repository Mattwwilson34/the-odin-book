import './Post.css';
import React from 'react';
import NavBubble from '../NavBubble/NavBubble';
import Comment from '../Comment/Comment';
import avatarIcon from '../../icons/avatar.svg';
import likeIcon from '../../icons/like.svg';
import commentIcon from '../../icons/comment.svg';
import forwardIcon from '../../icons/forward.svg';
import ToroPhoto from '../../photos/Toro.jpg';

const Post = () => (
  <div className='Post'>
    <div className='Post_Header_Container'>
      <NavBubble icon={avatarIcon} avatar />
      <div className='Post_Header_Text_Container'>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
          totam!
        </h3>
        <div>June 14, 2021</div>
      </div>
    </div>
    <div className='Post_Body_Container'>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        qui cumque rem quaerat quis libero! Deleniti natus facere perferendis
        iure repellendus iste autem doloremque tempora?
      </p>
      <img src={ToroPhoto} alt='frisbee team' />
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

export default Post;
