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

const Button = (className, title, type, onClick) => (
  <button
    className={className}
    title={title}
    type={type}
    onClick={onClick}
  />
);

export default Button;
