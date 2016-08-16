import React, { Component } from 'react'
import Routes from './routes/routes'

class App extends Component {

  render () {
    return (
      <div id='app-wrapper'>
        <div className='nav-wrapper'>
          <h1>Nav goes here</h1>
        </div>

        <div className='content-wrapper'>
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default App
