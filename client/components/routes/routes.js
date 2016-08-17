import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from '../App'
import Home from '../Home'
import About from '../About'
import Projects from '../Projects'
import Resume from '../Resume'
import Contact from '../Contact'

class Routes extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='about' component={About} />
          <Route path='projects' component={Projects} />
          <Route path='work' component={Resume} />
          <Route path='connect' component={Contact} />
        </Route>
        <Route path='/home' component={Home} />
      </Router>
    )
  }
}

export default Routes
