import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import * as icons from '../../utils/icon-exports';
import IconBubble from '../StyledComponents/IconBubble';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import Avatar from '../../../../components/Avatar';
import LogoBubble from '../StyledComponents/LogoBubble';
import IconLink from '../../../../components/StyledComponents/IconLink';
import Button from '../../../../components/StyledComponents/Button';

const NavContainer = styled(ContentContainer)`
  display: grid;
  grid-template: auto / 1fr 2fr 1fr;
  border-radius: 0;
  padding: 5px 10px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const logout = async () => {
  await axios.get('http://localhost:8080/auth/logout');
  window.location.reload(false);
};

const Navbar = ({ user }) => (
  <NavContainer padding='5px'>
    <ContentContainer padding='0'>
      <LogoBubble svg={icons.facebook} />
    </ContentContainer>
    <ContentContainer padding='0'>
      <IconLink svg={icons.home} href='/' />
      <Button backgroundColor='red' onClick={logout}>
        Logout
      </Button>
    </ContentContainer>
    <ContentContainer padding='0' margin='0 0 0 auto' gap='10px'>
      <IconBubble icon={icons.messenger} />
      <IconBubble icon={icons.bell} />
      <IconBubble icon={icons.circle} />
      <Avatar user={user} />
    </ContentContainer>
  </NavContainer>
);
Navbar.propTypes = {
  user: PropTypes.object,
};

Navbar.defaultProps = {
  user: {},
};

export default Navbar;
