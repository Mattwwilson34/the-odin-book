import styled from 'styled-components';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';

const IntroContainer = styled(ContentContainer)`
  align-self: flex-start;
  display: flex;
  flex: 1;
  gap: 20px;
  width: 100%;

  & > * {
    flex: 1 1 100%;
  }

  & > h2 {
    align-self: flex-start;
    font-family: 'Klavika-medium';
  }
`;

export default IntroContainer;
