import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default class NavBar extends React.Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Demo Next.js</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Pages" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1} href='/'>Home</MenuItem>
              <MenuItem eventKey={1.2} href='/search'>Search</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}