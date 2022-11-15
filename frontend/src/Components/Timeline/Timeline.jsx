import './Timeline.css';
import React from 'react';
import Status from '../Status/Status';
import Post from '../Post/Post';

const Timeline = () => (
  <div className='Timeline'>
    <Status />
    <Post />
  </div>
);

export default Timeline;
