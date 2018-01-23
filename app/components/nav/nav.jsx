import React from 'react';
import NavBar from 'react-bootstrap/lib/Navbar';
import { Nav, NavItem } from 'react-bootstrap';

const Navigation = (
  <NavBar>
    <NavBar.Header>
      <NavBar.Brand>
        <a href="/"><h1 className="title">Responsive Pages</h1></a>
      </NavBar.Brand>
    </NavBar.Header>
    <Nav>
      <NavItem eventKey={1} href="/PageList" />
    </Nav>
  </NavBar>
);

export default Navigation;
