import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import Conversation from '../Conversation/Conversation';
import newMessageIcon from '../../assets/icons/new-message.svg';
import NewMessage from '../NewMessage/NewMessage';

const MessageMenuContainer = styled.div`
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

const MessageMenu = ({ setConversations }) => {
  const handleClick = () =>
    setConversations((prev) => [...prev, <NewMessage />]);

  return (
    <MessageMenuContainer>
      <div>
        <h2>Chats</h2>
        <SVG src={newMessageIcon} onClick={handleClick} />
      </div>
      <Conversation setConversations={setConversations} />
    </MessageMenuContainer>
  );
};
MessageMenu.propTypes = {
  setConversations: PropTypes.func.isRequired,
};
export default MessageMenu;
