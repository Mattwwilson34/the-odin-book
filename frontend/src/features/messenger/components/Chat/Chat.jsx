import PropTypes from 'prop-types';
import ChatContainer from '../StyledComponents/ChatContainer';

const Chat = ({ children, setChats, chat }) => (
  <ChatContainer setChats={setChats} chat={chat}>
    {children}
  </ChatContainer>
);

Chat.propTypes = {
  children: PropTypes.object.isRequired,
  setChats: PropTypes.func.isRequired,
  chat: PropTypes.string.isRequired,
};

export default Chat;
