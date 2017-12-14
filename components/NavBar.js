import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import MenuItemWithLink from './MenuItemWithLink';

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
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <MenuItemWithLink href='/'>Home</MenuItemWithLink>
              <MenuItemWithLink href='/search'>Search</MenuItemWithLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}