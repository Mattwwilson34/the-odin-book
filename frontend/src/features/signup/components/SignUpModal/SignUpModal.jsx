import { useState } from 'react';
import Button from '../../../../components/StyledComponents/Button';
import ModalContainer from '../StyledComponents/ModalContainer';
import Form from '../StyledComponents/Form';
import FormContentContainer from '../StyledComponents/FormContentContainer';
import Input from '../StyledComponents/Input';



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
