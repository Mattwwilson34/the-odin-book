import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledLink = styled(Link)`
  margin: auto;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledSVG = styled(SVG).attrs((props) => ({
  src: props.svg,
}))`
  width: ${({ width }) => width || '40px'};
  height: 40px;
`;

const IconLink = ({ svg, href, width }) => (
  <StyledLink to={href}>
    <StyledDiv>
      <StyledSVG svg={svg} width={width} />
    </StyledDiv>
  </StyledLink>
);

IconLink.propTypes = {
  svg: PropTypes.string.isRequired,
  href: PropTypes.string,
  width: PropTypes.string,
};

IconLink.defaultProps = {
  href: '/',
  width: '40px',
};

export default IconLink;
