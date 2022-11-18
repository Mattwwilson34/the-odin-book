import './Timeline.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Status from '../Status/Status';
import Post from '../Post/Post';

const Timeline = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const postURL = 'http://localhost:8080/api/posts';
    (async () => {
      const postData = await axios.get(postURL);
      setPosts(postData.data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className='Timeline'>
      <Status user={user} />
      {isLoading
        ? '<h1>Loading</h1>'
        : posts.map((post) => <Post postData={post} key={post.postID} />)}
    </div>
  );
};

Timeline.propTypes = {
  user: PropTypes.shape({}),
};

Timeline.defaultProps = {
  user: {},
};

export default Timeline;
