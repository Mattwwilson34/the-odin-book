import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from 'boring-avatars';
import Header from './ChatHeader';

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

const ChatContainer = ({ children, chat, setChats }) => {
  //
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setInputText(value);
    console.log(inputText);
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === 'Enter' && inputText !== '') {
      console.log('Message sent: ', inputText);
      e.target.value = '';
    }
  };

  const handleClick = () =>
    setChats((prevChatsArray) => {
      const chatID = chat;
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
  chat: PropTypes.string.isRequired,
  setChats: PropTypes.func.isRequired,
};

export default ChatContainer;
