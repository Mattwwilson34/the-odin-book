import PropTypes from 'prop-types';

const Message = ({ text }) => (
  <div>
    <p>{text}</p>
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
