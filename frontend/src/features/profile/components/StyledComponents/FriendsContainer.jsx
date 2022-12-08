import styled from 'styled-components';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';

const FriendContainer = styled(ContentContainer)`
  display: flex;
  width: 100%;
  gap: 5px;

  & > svg {
    flex: 1 1 120px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;

export default FriendContainer;
