import styled from 'styled-components';

import Span from '../../../../components/StyledComponents/Span';

const DataSpan = styled(Span)`
  font-size: 1rem;
  display: block;
  color: ${(props) => (props.liked ? '#1a76f2' : 'grey')};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default DataSpan;
