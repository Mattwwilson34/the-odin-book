import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  placehold: props.placeholder,
}))`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
`;

export default Input;
