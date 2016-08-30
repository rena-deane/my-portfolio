import React, { Component } from 'react'
import Disclaimer from './subcomponents/Disclaimer'


class Connect extends Component {
  render () {
    return (
        <div className='connect-wrapper'>
          <h3 className='current-page'>Connect</h3>

          <div className='quote-wrapper'>
            <h1 className='quote maori'>“Kanohi ki te kanohi” </h1>
          </div>

          <ul className='connect-links'>
            <li>
              <img src='../../public/images/github.svg' className='social-icons'/>
            </li>
            <li>
              <img src='../../public/images/linkedin.svg' className='social-icons'/>
            </li>
            <li>
              <img src='../../public/images/twitter.svg' className='social-icons'/>
            </li>
          </ul>

          <Disclaimer />

      </div>
    )
  }
}

export default Connect
