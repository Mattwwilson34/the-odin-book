import styled from 'styled-components';

const TextInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
  placeholder: props.placeholder,
}))`
  width: ${({ width }) => width};
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 1.25rem;

  &[placeholder] {
    font-size: 1.25rem;
  }

  &:focus {
    border: 1px solid #1a76f2;
  }
`;

export default TextInput;
