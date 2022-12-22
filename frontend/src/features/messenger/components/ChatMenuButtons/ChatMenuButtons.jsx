import PropTypes from 'prop-types';
import ChatMenuButton from '../ChatMenuButton';

const ChatMenuButtons = ({ setChats }) => {
  //
  const array = [1, 2, 3, 4, 5];

  return (
    <div>
      {array.map((item) => (
        <ChatMenuButton key={item} setChats={setChats} />
      ))}
    </div>
  );
};

ChatMenuButtons.propTypes = {
  setChats: PropTypes.func.isRequired,
};

export default ChatMenuButtons;
