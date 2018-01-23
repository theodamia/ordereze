// import '../../public/build/styles.css'
import React from 'react';
import PropTypes from 'prop-types';
import '../style/css/style.scss';

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <header className="row">
//           <div className="col-lg-12">
//             <h1 className="title">Responsive Pages</h1>
//           </div>
//         </header>
//         <main className="row">
//           <div className="col-lg-12">
//             {this.props.children}
//           </div>
//         </main>
//         <footer className="row">
//
//         </footer>
//       </div>
//     );
//   }
// }

const App = ({ children }) => (
  <div className="container">
    <header className="row">
      <div className="col-lg-12">
        <h1 className="title">Responsive Pages</h1>
      </div>
    </header>
    <main className="row">
      <div className="col-lg-12">
        {children}
      </div>
    </main>
    <footer className="row" />
  </div>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default App;
