import './Comment.css';
import React from 'react';
import NavBubble from '../NavBubble/NavBubble';
import avatar from '../../icons/avatar.svg';

const Comment = () => (
  <div className='Comment_Container'>
    <div className='Comment_Left_Column'>
      <NavBubble icon={avatar} avatar />
    </div>
    <div className='Comment_Right_Column'>
      <div className='Comment_Text_Container'>
        <div className='Comment_Text_Header'>Matt Wilson</div>
        <div className='Comment_Text_Body'>Lorem ipsum dolor sit amet.</div>
      </div>
      <div className='Comment_Button_Container'>
        <a href='http://localhost:3000'>Like</a>
        <a href='http://localhost:3000'>Reply</a>
        <a href='http://localhost:3000'>2d</a>
      </div>
    </div>
  </div>
);
export default Comment;
