import styled from 'styled-components';

const Image = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  flex: 1 1 125px;
  aspect-ratio: 1/1;
  background-position: center center;

  &:nth-of-type(1) {
    border-top-left-radius: 5px;
  }

  &:nth-of-type(3) {
    border-top-right-radius: 5px;
  }

  &:nth-of-type(7) {
    border-bottom-left-radius: 5px;
  }

  &:nth-of-type(9) {
    border-bottom-right-radius: 5px;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export default Image;
