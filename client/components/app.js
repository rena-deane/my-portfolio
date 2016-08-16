import React, { Component } from 'react'
import Routes from './routes/routes'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'
import Work from './Resume'
import Connect from './Connect'

class App extends Component {

  render () {
    return (
      <div id='app-wrapper'>
        <Nav />

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
