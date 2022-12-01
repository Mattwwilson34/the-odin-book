import styled from 'styled-components';

const ExitButton = styled.div`
  background-color: grey;
  border-radius: 50%;
  padding: 0.5em;
  width: 30px;
  height: 30px;
  color: white;
  position: relative;
  margin: ${(props) => props.margin || '0 0 0 auto'};

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &:before {
    content: ' ';
    position: absolute;
    display: block;
    background-color: white;
    height: 2px;
    top: 14px;
    left: 5px;
    right: 5px;
    transform: rotate(45deg);
  }

  &:after {
    content: ' ';
    position: absolute;
    display: block;
    background-color: white;
    width: 2px;
    left: 14px;
    top: 5px;
    bottom: 5px;
    transform: rotate(45deg);
  }
`;

export default ExitButton;
