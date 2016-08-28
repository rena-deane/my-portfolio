import React, { Component } from 'react'

class About extends Component {
  render () {
    return (
      <div className='about-wrapper'>
        <div className='about origin col-xs-12 col-lg-6'>
          <h2>ABOUT</h2>
        </div>

        <div className='about journey col-xs-12 col-lg-6'>

          <div className='pepeha'>
            <h3>Ko Hikurangi te maunga,</h3>
            <h3>Ko Waiapu te awa,</h3>
            <h3>Ko Ngati Porou te iwi</h3>
          </div>

          <div className='aboutme'>
            <h4 className='about-headings'>Ko Au / About Me</h4>
            <div className='about-content'>
              <ul>
                <li>
                  Raised and immersed in a culturally strong environment where the traditions, practices and perspectives of my whanau, hapu and iwi were exercised daily.
                </li>

                <li>
                  This cultural strength provides me with the confidence and competence to act, think and behave in ways that allow me to recognise and respect the distinctiveness of others.
                </li>

                <li>
                  Born and bred on the East Coast of the North Island, Ruatoria and Rangitukia.
                </li>

              </ul>
            </div>
          </div>

          <div className='my-journey'>
            <h4 className='about-headings'>Hangarau / Technology</h4>
            <p className='about-content'>
              I challenged myself to follow that passion and pursue a career in Web Development.  As a result, I am a highly motivated and enthusiastic graduate of Enspiral Dev Academy where I continue to learn everyday.  I am motivated by the opportunities technology can provide to our people. Especially those in rural areas.  Small towns can benefit from untilising various technologies such as mapping, e-tourism, e-commerce and accessible learning resources.
            </p>
            <p className='about-content'>
            I believe in the saying, “When you learn, teach“.  When I feel like I’ve learnt all I can I hope one day I’ll be able to introduce and teach programming to rural communities around the country starting with my beloved East Coast.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
