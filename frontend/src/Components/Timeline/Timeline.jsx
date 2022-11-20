import './Timeline.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Status from '../Status/Status';
import Post from '../Post/Post';

const Timeline = ({ user, fetchPosts, setFetchPosts, setStatusModalOpen }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const postURL = 'http://localhost:8080/api/posts';
    if (fetchPosts) {
      (async () => {
        const postData = await axios.get(postURL);
        setPosts(postData.data);
        setIsLoading(false);
        setFetchPosts(false);
      })();
    }
  }, [fetchPosts]);

  return (
    <div className='Timeline'>
      <Status user={user} setStatusModalOpen={setStatusModalOpen} />
      {isLoading
        ? '<h1>Loading</h1>'
        : posts.map((post) => (
            <Post postData={post} key={post.postID} user={user} />
          ))}
    </div>
  );
};

Timeline.propTypes = {
  user: PropTypes.shape({}),
  fetchPosts: PropTypes.func.isRequired,
  setFetchPosts: PropTypes.func.isRequired,
  setStatusModalOpen: PropTypes.func.isRequired,
};

Timeline.defaultProps = {
  user: {},
};

export default Timeline;
