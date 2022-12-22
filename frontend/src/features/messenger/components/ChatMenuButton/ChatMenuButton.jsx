import PropTypes from 'prop-types';
import Avatar from 'boring-avatars';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
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

const ChatMenuButton = ({ setConversations }) => {
  const handleClick = () => {
    setConversations((oldConversations) => {
      console.log(oldConversations);
      return [...oldConversations, { name: 'matt' }];
    });
  };

  return (
    <>
      <Div onClick={handleClick}>
        <Avatar />
        <Span>Matt Wilson</Span>
      </Div>

      <Div onClick={handleClick}>
        <Avatar />
        <Span>Matt Wilson</Span>
      </Div>
      <Div>
        <Avatar />
        <Span>Matt Wilson</Span>
      </Div>
      <Div>
        <Avatar />
        <Span>Matt Wilson</Span>
      </Div>
    </>
  );
};
ChatMenuButton.propTypes = {
  setConversations: PropTypes.func.isRequired,
};

export default ChatMenuButton;
