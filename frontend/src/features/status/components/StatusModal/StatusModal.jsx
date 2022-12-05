import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../components/Avatar';

import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import Modal from '../../../../components/StyledComponents/Modal';
import ExitButton from '../../../../components/StyledComponents/ExitButton';
import TextArea from '../../../../components/StyledComponents/TextArea';
import Button from '../../../../components/StyledComponents/Button';
import Span from '../../../../components/StyledComponents/Span';

import useAddPostData from '../../../posts/hooks/useAddPostData';

const StatusModal = ({ user, setModalOpen }) => {
  const [textArea, setTextArea] = useState(null);

  const { mutate: addPost } = useAddPostData();

  const handleChange = (e) => setTextArea(e.target.value);

  const handleClick = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, [setModalOpen]);

  const submitPost = async () => {
    const post = { user: user.userID, textArea };
    addPost(post);
    setModalOpen(false);
  };

  return (
    <Modal>
      <ContentContainer width='400px' height='400px'>
        <Span fontSize='2rem' margin='auto' left='45px' bold>
          Create Post
        </Span>
        <ExitButton onClick={handleClick} />
        <hr />
        <Avatar user={user} />
        <Span margin='0 10px' bold>{`${user.firstName} ${user.lastName}`}</Span>
        <TextArea user={user} onChange={handleChange} />
        <Button disabled={!textArea} onClick={submitPost}>
          Post
        </Button>
      </ContentContainer>
    </Modal>
  );
};

StatusModal.propTypes = {
  user: PropTypes.object.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default StatusModal;
