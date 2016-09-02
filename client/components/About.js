import React, { Component } from 'react'
import AboutMe from './subcomponents/AboutMe'
import Interests from './subcomponents/Interests'
import Journey from './subcomponents/Journey'
import SubNav from './subcomponents/SubNav'

class About extends Component {

  render () {
    return (
      <div className='about-wrapper'>
        <h3 className='current-page'>About</h3>
        <div className='about journey'>
          <AboutMe />
          <Journey />
          <Interests />
        </div>
      </div>
    )
  }
}

export default About
