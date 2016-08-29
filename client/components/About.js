import React, { Component } from 'react'
import AboutMe from './subcomponents/AboutMe'
import TechMe from './subcomponents/TechMe'
import Journey from './subcomponents/Journey'

class About extends Component {
  render () {
    return (
      <div className='about-wrapper'>
        <div className='about origin col-xs-12 col-lg-6'>

        </div>

        <div className='about journey col-xs-12 col-lg-6'>

            <AboutMe />
            <Journey />
            <TechMe />

        </div>
      </div>
    )
  }
}

export default About
