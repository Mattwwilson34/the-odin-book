/* eslint-disable react/prop-types */
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import Span from './Span';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const StyledSVG = styled(SVG).attrs((props) => ({
  src: props.svg,
}))`
  width: ${(props) => props.width || '24px'};
`;

const IconButton = ({ svg, text, onClick }) => (
  <StyledButton onClick={onClick}>
    <StyledSVG svg={svg} />
    <Span fontSize='16px'>{text}</Span>
  </StyledButton>
);

export default IconButton;
