/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../../../components/StyledComponents/Button';

const StyledDiv = styled.div`
  background-color: #b0b0b0;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  alignt-items: center;
`;

const Form = styled.form`
  border: 1px dashed red;
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
`;

const FormContentContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type,
  placehold: props.placeholder,
}))`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
`;

const SignUpModal = () => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };

  return (
    <StyledDiv>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>{`It's quick and easy`}</p>
        <FormContentContainer>
          <Input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={inputValues.firstName}
            onChange={handleChange}
          />
          <Input
            type='text'
            name='lastName'
            placeholder='lastName'
            value={inputValues.lastName}
            onChange={handleChange}
          />
        </FormContentContainer>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          value={inputValues.email}
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          placeholder='New Password'
          onChange={handleChange}
          value={inputValues.password}
        />
        <Input
          type='date'
          name='date'
          value={inputValues.date}
          onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </StyledDiv>
  );
};
export default SignUpModal;
