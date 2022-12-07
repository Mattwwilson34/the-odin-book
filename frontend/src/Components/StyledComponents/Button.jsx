import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  outline: none;
  color: ${(props) => props.color};
  background-color: ${({ backgroundColor }) => backgroundColor || '#1a76f2'};
  padding: 15px;
  font-size: 1.25rem;
  color: white;
  width: ${({ width }) => width};

  &:hover {
    cursor: pointer;
    filter: brightness(0.95);
  }

  &[disabled] {
    background-color: grey;
    opacity: 0.8;
  }
`;

export default Button;
