import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, placeholder, onChange }) => (
  <input type={type} placeholder={placeholder} onChange={onChange} />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: 'Email',
};

export default Input;
