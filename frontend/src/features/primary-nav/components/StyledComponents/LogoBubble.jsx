import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
`;

const StyledSVG = styled(SVG).attrs((props) => ({
  src: props.svg,
}))`
  width: ${({ width }) => width || '40px'};
`;

const LogoBubble = ({ svg }) => (
  <StyledDiv>
    <StyledSVG svg={svg} />
  </StyledDiv>
);

LogoBubble.propTypes = {
  svg: PropTypes.string.isRequired,
};

export default LogoBubble;
