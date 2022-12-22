import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from 'boring-avatars';

const Container = styled.div`
  background-color: white;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px dashed red;
`;

const Header = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-content: center;
  border-bottom: 1px solid black;
  padding: 0 0 5px 0;
  margin: 0 0 5px 0;

  & > h3 {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  & > button {
    font-size: 1.5rem;
    display: block;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
`;

const ChatContainer = ({ children, index, setConversations }) => {
  const handleClick = () => setConversations((prev) => prev.slice(index, 1));

  return (
    <Container>
      <Header>
        <Avatar />
        <h3>Matt Wilson</h3>
        <button type='button' onClick={handleClick}>
          &#10005;
        </button>
      </Header>
      {children}
    </Container>
  );
};
ChatContainer.propTypes = {
  children: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  setConversations: PropTypes.func.isRequired,
};

export default ChatContainer;
