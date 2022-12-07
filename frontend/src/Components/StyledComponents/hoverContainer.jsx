import styled from 'styled-components';

const HoverContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  min-width: ${({ minWidth }) => minWidth || '50%'};
  &:hover {
    cursor: pointer;
    background-color: #e3e3e3;
  }
`;

export default HoverContainer;
