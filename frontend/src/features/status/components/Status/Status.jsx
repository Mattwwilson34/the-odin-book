import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StatusModal from '../StatusModal';
import Avatar from '../../../../components/Avatar';
import InputButton from '../../../../components/StyledComponents/InputButton';
import IconContainer from '../../../../components/StyledComponents/IconContainer';
import ContentContainer from '../../../../components/StyledComponents/ContentContainer';

import * as icons from '../../utils/icons-exports';

const StatusContainer = styled(ContentContainer)`
  width: 100%;
  gap: 6px;
`;

const Status = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => setModalOpen((prev) => !prev);

  return (
    <StatusContainer>
      {modalOpen && <StatusModal user={user} setModalOpen={setModalOpen} />}

      <Avatar user={user} />
      <InputButton bgColor='#eff2f5' onClick={handleClick}>
        What&apos;s on your mind {user.firstName}
      </InputButton>
      <hr />
      <IconContainer>
        <img src={icons.photo} alt='square' />
        Photo/video
        <img src={icons.smiley} alt='smiley face' />
        Feeling/activity
      </IconContainer>
    </StatusContainer>
  );
};

Status.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Status;
