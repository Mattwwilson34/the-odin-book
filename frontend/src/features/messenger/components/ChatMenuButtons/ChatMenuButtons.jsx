import PropTypes from 'prop-types';
import ChatMenuButton from '../ChatMenuButton';

const ChatMenuButtons = ({ chatIDArray, setChats }) => {
  //
  const array = [1, 2, 3, 4, 5];

  return (
    <div>
      {array.map((item, index) => (
        <ChatMenuButton
          key={item}
          setChats={setChats}
          chatID={chatIDArray[index]}
        />
      ))}
    </div>
  );
};

ChatMenuButtons.propTypes = {
  setChats: PropTypes.func.isRequired,
  chatIDArray: PropTypes.array.isRequired,
};

export default ChatMenuButtons;
