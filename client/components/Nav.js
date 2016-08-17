import React, { Component } from 'react'

class Nav extends Component {
  render () {
    return (
      <div id='nav-wrapper'>
        <nav className='navbar'>
          <ul className='navlist twelve columns'>
            <span className='home-logo'><a href='#'>Logo</a></span>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#work'>Work</a>
            </li>
            <li>
              <a href='#connect'>Connect</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
