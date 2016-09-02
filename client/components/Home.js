import React, { Component } from 'react'

class Home extends Component {
  render () {
    return (
      <div className='home-wrapper'>
        <div className='quote-wrapper'>
          <h1 className='quote maori'>“ E hoki ki o maunga. Kia purea koe i nga hau o te kaenga”</h1>
          <h1 className='quote pakeha'>Return to your mountains. That you may be cleansed by the winds of home.</h1>
          <p className='author'></p>
        </div>
      </div>
    )
  }
}

export default Home
