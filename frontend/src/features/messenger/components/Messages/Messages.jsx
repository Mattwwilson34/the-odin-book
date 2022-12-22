import styled from 'styled-components';
import Message from '../Message';

const MessagesContainer = styled.div`
  border: 2px dashed blue;
  flex: 1;
  background-color: #dadada;
`;

const Messages = () => {
  const array = ['hi', 'hello', 'wow'];

  return (
    <MessagesContainer>
      {array.map((item) => (
        <Message text={item} key={item} />
      ))}
    </MessagesContainer>
  );
};
export default Messages;
