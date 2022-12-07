import styled from 'styled-components';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';

const ButtonContainer = styled(ContentContainer)`
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify};
  padding: 0;
`;

export default ButtonContainer;
