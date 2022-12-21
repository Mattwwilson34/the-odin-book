import Avatar from 'boring-avatars';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import newMessage from '../../assets/icons/new-message.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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

const Conversation = () => (
  <Container>
    <div>
      <h2>Chats</h2>
      <SVG src={newMessage} onClick={() => console.log('new message')} />
    </div>
    <Div>
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
    <Div>
      <Avatar />
      <Span>Matt Wilson</Span>
    </Div>
  </Container>
);

export default Conversation;
