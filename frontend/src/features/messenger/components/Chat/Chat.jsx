import PropTypes from 'prop-types';
import ChatContainer from '../StyledComponents/ChatContainer';

const Chat = ({ index, setConversations }) => (
  <ChatContainer index={index} setConversations={setConversations}>
    <h1>Chat COMPONENT {index}</h1>
  </ChatContainer>
);

Chat.propTypes = {
  index: PropTypes.number.isRequired,
  setConversations: PropTypes.func.isRequired,
};

export default Chat;
