import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Navigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      isScrolling: false,
      isFetching: true
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      isFetching: false,
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll () {
    let body = document.getElementsByTagName('body')[0]
    let navbar = document.getElementsByClassName('navbar')[0]
    if (body.scrollTop > 500) {
      return navbar.classList.add('scroll')
    } else {
      return navbar.classList.remove('scroll')
    }
  }

  render () {
    return (
      <Navbar fixedTop className={this.state.isScrolling ? 'scroll' : '' }>
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
            <NavItem eventKey={3} href='#resume' className='list-link'>
              RESUME
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
