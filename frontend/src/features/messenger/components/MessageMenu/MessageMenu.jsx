import styled from 'styled-components';
import PropTypes from 'prop-types';
import Conversation from '../Conversation/Conversation';

const MessageMenuContainer = styled.div`
  display: flex;
  flex-dirextion: column;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 65px;
  right: 0;
  border: 1px dashed red;
  flex-wrap: wrap;
`;

const MessageMenu = ({ setConversations }) => (
  <MessageMenuContainer>
    <Conversation setConversations={setConversations} />
  </MessageMenuContainer>
);

MessageMenu.propTypes = {
  setConversations: PropTypes.func.isRequired,
};
export default MessageMenu;
