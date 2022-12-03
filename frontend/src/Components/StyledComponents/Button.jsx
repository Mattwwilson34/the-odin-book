import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  flex: 1;
  border: none;
  border-radius: 10px;
  outline: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  padding: 15px;
  font-size: 1.25rem;
  background-color: #1a76f2;
  color: white;

  &[disabled] {
    background-color: grey;
    opacity: 0.8;
  }
`;

export default Button;
