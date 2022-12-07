/* eslint-disable react/prop-types */
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import Span from './Span';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  padding: ${({ padding }) => padding};

  &:hover {
    cursor: pointer;
  }
`;

const StyledSVG = styled(SVG).attrs((props) => ({
  src: props.svg,
}))`
  width: ${(props) => props.width || '24px'};
`;

const IconButton = ({ svg, text, onClick, width, padding, margin, bold }) => (
  <StyledButton onClick={onClick} padding={padding}>
    <StyledSVG svg={svg} width={width} />
    <Span fontSize='16px' bold={bold} margin={margin}>
      {text}
    </Span>
  </StyledButton>
);

export default IconButton;
