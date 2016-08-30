import React, { Component } from 'react'
import Disclaimer from './subcomponents/Disclaimer'


class Connect extends Component {
  render () {
    return (
        <div className='connect-wrapper'>

          <div className='quote-wrapper'>
            <h1 className='quote maori'>“Kanohi ki te kanohi? Close enough!” </h1>
          </div>

          <ul className='connect-links'>
            <li>
              <a href='https://github.com/rena-deane'><img src='../../public/images/github.svg' className='social-icons'/></a>
            </li>
            <li>
              <a href='https://nz.linkedin.com/in/renadeane'><img src='../../public/images/linkedin.svg' className='social-icons'/></a>
            </li>
            <li>
              <a href='https://twitter.com/renaGoldsmith'><img src='../../public/images/twitter.svg' className='social-icons'/></a>
            </li>
          </ul>

          <Disclaimer />

      </div>
    )
  }
}

export default Connect
