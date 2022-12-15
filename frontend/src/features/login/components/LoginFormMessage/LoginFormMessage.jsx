import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  background-color: white;
  color: red;
  border: 3px solid red;
  border-radius: 5px;
  font-size: 1.25rem;
  padding: 10px;
  margin: 10px;
`;
const StyledSpan = styled.span``;

const LoginFormMessage = ({ message }) => (
  <StyledDiv>
    <StyledSpan>{message}</StyledSpan>
  </StyledDiv>
);

LoginFormMessage.propTypes = {
  message: PropTypes.string,
};

LoginFormMessage.defaultProps = {
  message: '',
};
export default LoginFormMessage;
