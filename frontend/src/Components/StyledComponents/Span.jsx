import styled from 'styled-components';

const Span = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  font-family: ${(props) => (props.bold ? 'Klavika-medium' : 'Klavika-light')};
  align-self: stretch;
  margin: ${({ margin }) => margin};
  left: ${(props) => props.left};
  font-size: ${(props) => props.fontSize || '1.25rem'};
  width: ${({ width }) => width};
`;

export default Span;
