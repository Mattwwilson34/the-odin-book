import styled from 'styled-components';

const ModalContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export default ModalContainer;
