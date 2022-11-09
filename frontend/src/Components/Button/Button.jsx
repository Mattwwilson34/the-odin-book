import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ submit, text }) => (
  <button type={submit ? 'submit' : 'button'}>{text}</button>
);

Button.propTypes = {
  submit: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  submit: false,
  text: 'text',
};

export default Button;
