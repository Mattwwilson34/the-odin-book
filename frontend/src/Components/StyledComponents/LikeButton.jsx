import { useState } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import Span from './Span';

import likeIcon from '../../features/posts/assets/icons/like.svg';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  padding: 2px;
  border-radius: 50%;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    pointer-events: none;
    color: black;
  }
`;

const StyledSVG = styled(SVG).attrs(() => ({
  src: likeIcon,
}))`
  margin: 0;
  padding: 0;
  width: ${(props) => props.width || '24px'};
  border-radius: 50%;
  background-color: ${(props) => (props.$liked ? '#1a76f2' : 'transparent')};

  & path {
    fill: ${(props) => (props.$liked ? 'white' : 'transparent')};
    stroke: ${(props) => (props.$liked ? '#1a76f2' : 'black')};
  }
`;

const LikeButton = ({ text, disabled }) => {
  const [liked, setLiked] = useState(false);

  return (
    <StyledButton disabled={disabled} onClick={() => setLiked((prev) => !prev)}>
      <StyledSVG $liked={liked} />
      <Span fontSize='16px'>{text}</Span>
    </StyledButton>
  );
};

LikeButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

LikeButton.defaultProps = {
  text: '',
  disabled: false,
};

export default LikeButton;
