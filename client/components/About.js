import React, { Component } from 'react'
import AboutMe from './subcomponents/AboutMe'
import TechMe from './subcomponents/TechMe'
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
            <TechMe />
        </div>

      </div>
    )
  }
}

export default About
