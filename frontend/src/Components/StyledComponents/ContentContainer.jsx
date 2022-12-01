import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => (props.border ? '2px dashed red' : 'none')};
`;

export default ContentContainer;
