import styled from 'styled-components';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';

const ProfileContainer = styled(ContentContainer)`
  align-self: flex-start;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  gap: 10px;
  background: #eff2f5;
  max-width: ${({ maxWidth }) => maxWidth};
`;

export default ProfileContainer;
