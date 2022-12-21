import styled from 'styled-components';

const MessageContainer = styled.div`
  background-color: white;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px dashed red;
`;

const Message = () => (
  <MessageContainer>
    <h1>&#10005;</h1>
    <h1>Message COMPONENT</h1>
  </MessageContainer>
);

export default Message;
