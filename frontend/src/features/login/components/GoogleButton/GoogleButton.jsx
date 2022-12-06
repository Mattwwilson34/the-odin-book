import './GoogleButton.css';
import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import googleIcon from '../../assets/icons/google.svg';
import redirectToGoogleOAuth from '../../api/redirect-google-OAuth';

import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import Button from '../../../../components/StyledComponents/Button';

const ButtonContainer = styled(ContentContainer)`
  border-radius: 5px;
  width: 100%;
  padding: 0;
  flex-wrap: nowrap;
  align-items: stretch;

  &:hover {
    cursor: pointer;
    filter: brightness(0.95);
  }
`;

const IconContainer = styled(ContentContainer)`
  padding: 0 5px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledSVG = styled(SVG).attrs((props) => ({
  src: props.svg,
}))`
  width: ${(props) => props.width || '25px'};
`;

const GoogleButton = () => (
  <ButtonContainer onClick={redirectToGoogleOAuth}>
    <IconContainer>
      <StyledSVG svg={googleIcon} />
    </IconContainer>
    <Button borderRadius='0 5px 5px 0' width='100%' noHover>
      Sign in with Google
    </Button>
  </ButtonContainer>
);

export default GoogleButton;
