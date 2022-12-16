import React, { useState } from 'react';
import styled from 'styled-components';

import ContentContainer from '../../../../components/StyledComponents/ContentContainer';
import Button from '../../../../components/StyledComponents/Button';
import TextInput from '../../../../components/StyledComponents/TextInput';
import GoogleButton from '../GoogleButton';
import SignUpModal from '../../../signup';
import postLoginData from '../../api/postLoginData';
import LoginFormMessage from '../LoginFormMessage/LoginFormMessage';

const LoginContainer = styled(ContentContainer)`
  margin: 20vh auto;
  padding: 20px;
  flex-direction: column;
  width: 30%;
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
  font-family: 'klavika-medium';
  color: #1a76f2;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const reloadPage = () => {
    window.location.reload(false);
  };

  const handleChange = (e) => {
    const { placeholder: input, value } = e.target;
    return input === 'Email' ? setEmail(value) : setPassword(value);
  };

  const handleClick = () => setSignUpModalOpen((prev) => !prev);

  const handleSubmit = async () => {
    const loginData = {
      username: email,
      password,
    };
    const response = await postLoginData(loginData);
    if (response.data.message) {
      setLoginMessage(response.data.message);
    } else {
      reloadPage();
    }
  };

  return (
    <>
      {signUpModalOpen && (
        <SignUpModal
          setSignUpModalOpen={setSignUpModalOpen}
          setLoginMessage={setLoginMessage}
        />
      )}
      {loginMessage && <LoginFormMessage message={loginMessage} />}
      <LoginContainer gap='10px'>
        <StyledHeader>odinbook</StyledHeader>
        <TextInput width='100%' placeholder='Email' onChange={handleChange} />
        <TextInput
          width='100%'
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <Button
          width='100%'
          disabled={!email || !password}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Button width='100%' backgroundColor='#42b729' onClick={handleClick}>
          Create Account
        </Button>
        <GoogleButton />
      </LoginContainer>
    </>
  );
};

export default Login;
