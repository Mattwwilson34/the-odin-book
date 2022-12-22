import PropTypes from 'prop-types';
import { useState } from 'react';
import Avatar from 'boring-avatars';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Button = styled.button.attrs(({ disabled }) => ({
  type: 'button',
  disabled,
}))`
  display: flex;
  background-color: transparent;
  align-content: center;
  gap: 10px;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

const Span = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const ChatMenuButton = ({ setChats }) => {
  //
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setChats((prevChats) => {
      console.log(prevChats);
      return [...prevChats, uuidv4()];
    });
    setDisabled((prev) => !prev);
  };

  return (
    <Button disabled={disabled} onClick={handleClick}>
      <Avatar />
      <Span>Matt Wilson</Span>
    </Button>
  );
};
ChatMenuButton.propTypes = {
  setChats: PropTypes.func.isRequired,
};

export default ChatMenuButton;
