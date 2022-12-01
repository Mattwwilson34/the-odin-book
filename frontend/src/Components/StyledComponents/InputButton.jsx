import styled from 'styled-components';

const InputButton = styled.button`
  display: inline-flex;
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.color ? props.color : 'black')};
  border-radius: 999px;
  height: ${(props) => (props.height ? props.height : '40px')};

  &:hover {
    filter: brightness(95%);
    cursor: pointer;
  }
`;

export default InputButton;
