import styled from 'styled-components';

const CommentTextInput = styled.input.attrs((props) => ({
  type: props.type,
  placeholder: props.placeholder,
  value: props.value,
  ref: props.ref,
}))`
  flex: 1;
  margin: ${({ margin }) => margin};
  padding: 8px 10px;
  background-color: #eff2f5;
  border: none;
  border-radius: 999px;

  &:focus {
    border: none;
  }
`;

export default CommentTextInput;
