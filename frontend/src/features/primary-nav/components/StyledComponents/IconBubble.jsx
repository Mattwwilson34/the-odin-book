/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: ${({ border }) => (border ? '2px dashed red' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  aspect-ratio: 1 / 1;
  background-color: #eff2f5;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

const StyledImg = styled.img.attrs((props) => ({
  src: props.icon,
}))`
  width: ${({ width }) => width || '20px'};
`;

const IconBubble = ({ icon, border, onClick }) => (
  <StyledDiv border={border} onClick={onClick}>
    <StyledImg icon={icon} />
  </StyledDiv>
);

export default IconBubble;
