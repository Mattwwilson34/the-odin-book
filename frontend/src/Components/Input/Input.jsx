import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, placeholder, onKeyPress, onChange, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={className}
    onChange={onChange}
    onKeyPress={onKeyPress}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: 'Email',
  className: '',
  onKeyPress: () => false,
  onChange: () => false,
};

export default Input;
