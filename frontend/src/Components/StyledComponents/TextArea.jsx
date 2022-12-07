import styled from 'styled-components';

const TextArea = styled.textarea.attrs((props) => ({
  rows: props.rows || '5',
  cols: props.cols || '5',
  placeholder: `What's on your mind ${props.user.firstName}` || '',
}))`
  display: block;
  border: none;
  align-self: stretch;
  color: black;
  width: 100%;
  resize: none;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
`;

export default TextArea;
