import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${({ padding }) => padding || '10px'};
  gap: ${({ gap }) => gap};
  background: ${({ background }) => background || 'white'};
  border-radius: 10px;
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => (props.border ? '2px dashed red' : 'none')};
`;

export default ContentContainer;
