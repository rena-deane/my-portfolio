import React, { Component } from 'react'

class About extends Component {
  render () {
    return (
      <div className='about-wrapper'>
        <a name='about'></a>

        <div className='about-me one-half column'>
          <h3>Ko Hikurangi te maunga,</h3>
          <h3>Ko Waiapu te awa,</h3>
          <h3>Ko Ngati Porou te iwi</h3>
        </div>

        <div className='about-journey one-half column'>
          <p>
            I am a recent graduate from Enspiral Dev Academy (read more about my experience below).  I challenged myself to follow  my passion of creating things and pursue a career in Web Development.
          </p>
          <p>
            I enjoy creating things that help solve problems and to learn.
          </p>
          <p>
          I am looking for my first web development role where I can continue to learn but where I can use the skills I have to contribute to a great team.  I am loving the journey so far.
          </p>
          <p>
          I believe in the saying, “When you learn, teach“.  I hope one day that I’ll be able to teach programming to rural communities around the country starting with my beloved East Coast.
          </p>
        </div>
      </div>
    )
  }
}

export default About
