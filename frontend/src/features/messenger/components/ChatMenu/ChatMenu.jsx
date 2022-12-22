import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import newMessageIcon from '../../assets/icons/new-message.svg';
import ChatMenuButtons from '../ChatMenuButtons/ChatMenuButtons';
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

const ChatMenu = ({ setChats }) => {
  const handleClick = () => setChats((prev) => [...prev, <NewChat />]);

  return (
    <ChatMenuContainer>
      <div>
        <h2>Chats</h2>
        <SVG src={newMessageIcon} onClick={handleClick} />
      </div>
      <ChatMenuButtons setChats={setChats} />
    </ChatMenuContainer>
  );
};
ChatMenu.propTypes = {
  setChats: PropTypes.func.isRequired,
};
export default ChatMenu;
