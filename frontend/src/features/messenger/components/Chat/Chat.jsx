import PropTypes from 'prop-types';
import ChatContainer from '../StyledComponents/ChatContainer';

const Chat = ({ children, setChats, chatID }) => (
  <ChatContainer setChats={setChats} chatID={chatID}>
    {children}
  </ChatContainer>
);

Chat.propTypes = {
  children: PropTypes.object.isRequired,
  setChats: PropTypes.func.isRequired,
  chatID: PropTypes.string.isRequired,
};

export default Chat;
