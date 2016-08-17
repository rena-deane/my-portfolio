import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Navigation extends Component {

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href='#'>
              Link Right
            </NavItem>
            <NavItem eventKey={2} href='#'>
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
