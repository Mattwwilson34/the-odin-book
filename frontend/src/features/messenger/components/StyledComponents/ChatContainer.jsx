import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from 'boring-avatars';
import Header from './ChatHeader';

import socket from '../../../../utils/socket-io';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 300px;
  border-radius: 10px;
`;

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  justify-self: flex-end;
`;

const ChatContainer = ({ children, chatID, setChats }) => {
  //
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter' && inputText !== '') {
      console.log('Message sent: ', inputText);
      await socket.emit('send_message', { text: inputText });
      e.target.value = '';
    }
  };

  const handleClick = () =>
    setChats((prevChatsArray) => {
      console.log('chat id:', chatID);

      const updatedArray = prevChatsArray.filter((val) => val !== chatID);
      return updatedArray;
    });

  return (
    <Container>
      <Header>
        <Avatar />
        <h3>Matt Wilson</h3>
        <button type='button' onClick={handleClick}>
          &#10005;
        </button>
      </Header>
      {children}
      <Input onChange={handleChange} onKeyPress={handleKeyPress} />
    </Container>
  );
};
ChatContainer.propTypes = {
  children: PropTypes.object.isRequired,
  chatID: PropTypes.string.isRequired,
  setChats: PropTypes.func.isRequired,
};

export default ChatContainer;
