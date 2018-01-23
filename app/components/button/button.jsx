// export default class Button extends React.Component {
//   render() {
//     const {
//       className, title, type, onClick, text,
//     } = this.props;
//     return (
//       <button
//         className={className}
//         title={title}
//         type={type}
//         onClick={onClick}
//       >
//         {text}
//       </button>
//     );
//   }
// }

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
