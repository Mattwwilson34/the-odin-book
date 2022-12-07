import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.gap ? props.gap : '10px')};

  > img {
    width: ${(props) => (props.imgWidth ? props.imgWidth : '24px')};
  }

  > img:nth-of-type(2) {
    margin-left: ${(props) => props.marginLeft};
  }
`;

export default IconContainer;
