import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  background-color: white;
  color: red;
  border: 3px solid red;
  border-radius: 5px;
  font-size: 1.25rem;
  padding: 10px;
`;
const StyledSpan = styled.span``;

const Message = ({ message }) => (
  <StyledDiv>
    <StyledSpan>{message}</StyledSpan>
  </StyledDiv>
);

Message.propTypes = {
  message: PropTypes.string,
};

Message.defaultProps = {
  message: '',
};
export default Message;
