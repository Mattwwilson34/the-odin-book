import { useState } from 'react';
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
  background-color: ${(props) => (props.liked ? '#1a76f2' : 'transparent')};

  & path {
    fill: ${({ liked }) => (liked ? 'white' : 'transparent')};
    stroke: ${({ liked }) => (liked ? '#1a76f2' : 'black')};
  }
`;

// eslint-disable-next-line react/prop-types
const LikeButton = ({ text, disabled }) => {
  const [liked, setLiked] = useState(false);

  return (
    <StyledButton
      liked={liked}
      disabled={disabled}
      onClick={() => setLiked((prev) => !prev)}
    >
      <StyledSVG liked={liked} />
      <Span fontSize='16px'>{text}</Span>
    </StyledButton>
  );
};

export default LikeButton;
