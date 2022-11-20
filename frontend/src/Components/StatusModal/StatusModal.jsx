import './StatusModal.css';
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NavBubble from '../NavBubble/NavBubble';

const StatusModal = ({ user, setFetchPosts, setStatusModalOpen }) => {
  //
  // State
  const [textArea, setTextArea] = useState('');

  const handleTextAreaChange = (e) => setTextArea(e.target.value);

  const handleStatusButtonClick = useCallback(() => {
    setStatusModalOpen((prev) => !prev);
  }, [setStatusModalOpen]);

  const submitPost = async () => {
    const postURL = 'http://localhost:8080/api/posts';

    const post = {
      userID: user.userID,
      postBody: textArea,
    };

    try {
      const response = await axios.post(postURL, post);
      handleStatusButtonClick();
      setFetchPosts(true);
      console.log(response.data);
    } catch (err) {
      if (err) throw err;
    }
  };

  return (
    <div className='Status_Modal'>
      <div className='Status_Modal_Form'>
        <div className='Status_Modal_Form_Header_Container'>
          <span className='Status_Modal_Form_Header'>Create Post</span>
          <button
            type='button'
            className='Status_Modal_Form_Exit_Btn'
            onClick={handleStatusButtonClick}
          >
            &#x2715;
          </button>
        </div>
        <hr />
        <div className='Status_Modal_User_Info_Container'>
          <NavBubble avatar icon={user.profilePicture} />
          <span>{`${user.firstName} ${user.lastName}`}</span>
        </div>
        <textarea
          className='Status_Modal_Form_Textarea'
          onChange={handleTextAreaChange}
          id='story'
          name='story'
          rows='5'
          cols='33'
          placeholder={`What's on your mind ${user.firstName}`}
        />
        <button
          className='Status_Modal_Post_Btn'
          type='button'
          onClick={submitPost}
          disabled={!textArea}
        >
          Post
        </button>
      </div>
    </div>
  );
};

StatusModal.propTypes = {
  user: PropTypes.object.isRequired,
  setFetchPosts: PropTypes.func.isRequired,
  setStatusModalOpen: PropTypes.func.isRequired,
};

export default StatusModal;
