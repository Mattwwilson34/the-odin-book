import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-content: center;
  box-shadow: 0px 1px 1px black;

  & > h3 {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  & > button {
    font-size: 1.5rem;
    display: block;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
`;

export default Header;
