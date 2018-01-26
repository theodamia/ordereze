import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className, type, onClick, text,
}) => (
  <button
    className={className}
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
