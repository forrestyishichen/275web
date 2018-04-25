import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Headernav extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">CMPE275-SurveyApe</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/">
                  Home
                </NavItem>
                <NavItem eventKey={2} href="/roster">
                  Take a survey
                </NavItem>
                <NavItem eventKey={3} href="/schedule">
                  Schedule
                </NavItem>
                <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>Action</MenuItem>
                  <MenuItem eventKey={4.2}>Another action</MenuItem>
                  <MenuItem eventKey={4.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/login">
                  Log In
                </NavItem>
                <NavItem eventKey={2} href="/signup">
                  Sign Up
                </NavItem>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Headernav;
