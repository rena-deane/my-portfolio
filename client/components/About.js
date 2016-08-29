import React, { Component } from 'react'
import AboutMe from './subcomponents/AboutMe'
import TechMe from './subcomponents/TechMe'

class About extends Component {
  render () {
    return (
      <div className='about-wrapper'>
        <div className='about origin col-xs-12 col-lg-6'>

        </div>

        <div className='about journey col-xs-12 col-lg-6'>

          <div className='pepeha'>
            <h3>Ko Hikurangi te maunga,</h3>
            <h3>Ko Waiapu te awa,</h3>
            <h3>Ko Ngati Porou te iwi</h3>
          </div>

          <div className='aboutme'>
            <div className='about-content'>
              <AboutMe />
            </div>
          </div>

          <div className='my-journey'>
            <TechMe />
          </div>

        </div>
      </div>
    )
  }
}

export default About
