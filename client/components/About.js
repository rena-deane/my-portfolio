import React, { Component } from 'react'

class About extends Component {
  render () {
    return (
      <div className='about-wrapper'>
        <div className='about one-half column'>

        </div>

        <div className='about-me one-half column'>
          <div className='pepeha'>
            <h3>Ko Hikurangi te maunga,</h3>
            <h3>Ko Waiapu te awa,</h3>
            <h3>Ko Ngati Porou te iwi</h3>
          </div>

          <div className='my-journey'>
            <h4>Phase 1</h4>
            <p>
              I enjoy creating things that help solve day-to-day problems and things that are used as learning resources.  I challenged myself to follow that passion and pursue a career in Web Development.  As a result, I am a recent graduate of Enspiral Dev Academy and continuing my journey to learn.
            </p>
            <p>
            I am looking for my first web development role where I can continue to learn and use the skills I have to contribute to a great team.
            </p>
            <p>
            I believe in the saying, “When you learn, teach“.  I hope one day that I’ll be able to teach and introduce programming to rural communities around the country starting with my beloved East Coast.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
