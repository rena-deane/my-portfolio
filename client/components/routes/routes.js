import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../App';
import Home from '../Home'
import About from '../About'
import Projects from '../Projects'
import Resume from '../Resume'
import Contact from '../Contact'

export default (
  <Router history={browserHistory}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="projects" component={Projects} />
      <Route path="work" component={Resume} />
      <Route path="connect" component={Contact} />
    </Route>
  </Router>
)

