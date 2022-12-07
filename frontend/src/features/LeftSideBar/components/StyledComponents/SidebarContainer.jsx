import styled from 'styled-components';

import ContentContainer from '../../../../components/StyledComponents/ContentContainer';

const SidebarContainer = styled(ContentContainer)`
  height: 100vh;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  background-color: transparent;
`;

export default SidebarContainer;
