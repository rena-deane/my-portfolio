import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Navigation extends Component {

  render () {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Rena-Deane</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href='#about' className='list-link' data-hover='Ko Au'>
              ABOUT
            </NavItem>
            <NavItem eventKey={2} href='#projects' className='list-link'>
              PROJECTS
            </NavItem>
            <NavItem eventKey={3} href='#work' className='list-link'>
              WORK
            </NavItem>
            <NavItem eventKey={4} href='#connect' className='list-link connect'>
              CONNECT
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
