import styled from 'styled-components';

const Span = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  font-family: ${(props) => (props.bold ? 'Klavika-medium' : 'Klavika-light')};
  align-self: stretch;
  margin: ${(props) => props.margin};
  left: ${(props) => props.left};
  font-size: ${(props) => props.fontSize || '1.25rem'};
`;

export default Span;
