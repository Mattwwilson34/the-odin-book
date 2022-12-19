import styled from 'styled-components';

const CardAvatar = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  width: 100%;
  height: 150px;
`;

export default CardAvatar;
