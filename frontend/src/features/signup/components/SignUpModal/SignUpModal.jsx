import { useState } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import Button from '../../../../components/StyledComponents/Button';
import ModalContainer from '../StyledComponents/ModalContainer';
import Form from '../StyledComponents/Form';
import FormContentContainer from '../StyledComponents/FormContentContainer';
import Input from '../StyledComponents/Input';

import postSignupData from '../../api/postSignupData';

const SignUpModal = ({ setSignUpModalOpen }) => {
  const [message, setMessage] = useState('');
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthdate: '',
  });

  const handleClick = (e) => {
    e.preventDefault();
    setSignUpModalOpen((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const response = await postSignupData(inputValues);
    const { message: serverMessage } = response.data;
    if (serverMessage) {
      setMessage(serverMessage);
    } else {
      setSignUpModalOpen((prevState) => !prevState);
    }
  };

  return (
    <ModalContainer>
      {message && <Message message={message} />}
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>{`It's quick and easy`}</p>
        <FormContentContainer>
          <Input
            name='firstName'
            placeholder='First Name'
            value={inputValues.firstName}
            onChange={handleChange}
          />
          <Input
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
          name='birthdate'
          value={inputValues.date}
          onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
        <Button backgroundColor='red' onClick={handleClick}>
          Cancel
        </Button>
      </Form>
    </ModalContainer>
  );
};

SignUpModal.propTypes = {
  setSignUpModalOpen: PropTypes.func.isRequired,
};
export default SignUpModal;
