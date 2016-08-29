import React, { Component } from 'react'
import ProjectOne from './subcomponents/ProjectOne'
import ProjectTwo from './subcomponents/ProjectTwo'
import ProjectThree from './subcomponents/ProjectThree'


class Projects extends Component {
  render () {
    return (
      <div className='projects-wrapper'>
        <h3 className='current-page'>Projects</h3>
        <a name='projects'></a>
        <div className='projects'>
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
        </div>
      </div>
    )
  }
}

export default Projects
