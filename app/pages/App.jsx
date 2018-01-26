import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'react-bootstrap/lib/Navbar';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import '../style/css/style.scss';

const App = ({ children }) => (
  <div className="container">
    <header className="row">
      <div className="col-lg-12">
        <NavBar>
          <NavBar.Header>
            <NavBar.Brand>
              <Link href="/public" to="/public">Responsive Pages</Link>
            </NavBar.Brand>
          </NavBar.Header>
          <Nav>
            <LinkContainer to="/PageList" >
              <NavItem>Page List</NavItem>
            </LinkContainer>
          </Nav>
        </NavBar>
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
