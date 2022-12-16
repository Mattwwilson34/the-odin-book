import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as icons from '../../utils/icon-exports';

import Avatar from '../../../../components/Avatar';
import IconButton from '../../../../components/StyledComponents/IconButton';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import Span from '../../../../components/StyledComponents/Span';
import SidebarContainer from '../StyledComponents/SidebarContainer';
import HoverContainer from '../../../../components/StyledComponents/HoverContainer';

const LeftSidebar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <HoverContainer onClick={() => navigate('/profile')}>
        <ContentContainer padding='0' background='transparent' gap='10px'>
          <Avatar user={user} />
          <Span bold>{`${user.firstName} ${user.lastName}`}</Span>
        </ContentContainer>
      </HoverContainer>
      <HoverContainer onClick={() => navigate('/friends', { state: { user } })}>
        <IconButton
          svg={icons.friends}
          text='friends'
          width='40px'
          padding='0'
          margin='0 0 0 10px'
          bold
        />
      </HoverContainer>
      <HoverContainer>
        <IconButton
          svg={icons.calendar}
          text='events'
          width='40px'
          padding='0'
          margin='0 0 0 10px'
          bold
        />
      </HoverContainer>
      <HoverContainer>
        <IconButton
          svg={icons.groups}
          text='groups'
          width='40px'
          padding='0'
          margin='0 0 0 10px'
          bold
        />
      </HoverContainer>
    </SidebarContainer>
  );
};

LeftSidebar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default LeftSidebar;
