import React, { Component } from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Work from './Resume'
import Connect from './Connect'

class App extends Component {

  render () {
    return (
      <div id='app-wrapper'>
        <a name='#'></a>
        <Nav />
        <div className='content-wrapper'>
          <Home />
        </div>
        <div className='content-wrapper'>
          <About />
        </div>
        <div className='content-wrapper'>
          <Projects />
        </div>
        <div className='content-wrapper'>
          <Work />
        </div>
        <div className='content-wrapper'>
          <Connect />
        </div>
      </div>
    )
  }

}

export default App
