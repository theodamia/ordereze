import React from 'react';
import NavBar from 'react-bootstrap/lib/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';

const Navigation = (
  <NavBar>
    <NavBar.Header>
      <NavBar.Brand>
        <Link href="/public" to="/public">Responsive Pages</Link>
      </NavBar.Brand>
    </NavBar.Header>
    <Nav>
      <LinkContainer to="/PageList" >
        <NavItem>Pages List</NavItem>
      </LinkContainer>
    </Nav>
  </NavBar>
);

export default Navigation;
