import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import ChatMenuButton from '../ChatMenuButton/ChatMenuButton';
import newMessageIcon from '../../assets/icons/new-message.svg';
import NewChat from '../NewChat/NewChat';

const ChatMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 65px;
  right: 0;
  border: 1px dashed red;
  flex-wrap: wrap;
`;

const ChatMenu = ({ setConversations }) => {
  const handleClick = () => setConversations((prev) => [...prev, <NewChat />]);

  return (
    <ChatMenuContainer>
      <div>
        <h2>Chats</h2>
        <SVG src={newMessageIcon} onClick={handleClick} />
      </div>
      <ChatMenuButton setConversations={setConversations} />
    </ChatMenuContainer>
  );
};
ChatMenu.propTypes = {
  setConversations: PropTypes.func.isRequired,
};
export default ChatMenu;
