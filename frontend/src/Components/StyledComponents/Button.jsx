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

  &[disabled] {
    background-color: grey;
    opacity: 0.8;
  }
`;

export default Button;
