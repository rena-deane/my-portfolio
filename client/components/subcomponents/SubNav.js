import React, { Component } from 'react'
import { Button, Modal, ModalHeader, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'


class SubNav extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      isFetching: true
    }
  }

  componentDidMount() {
    this.setState({ isFetching: false })
  }

  render() {

    return (
      <div className='subnav'>
        <ul className='subnav-links'>
          <li>About</li> /
          <li>Projects</li> /
          <li>Resume</li> /
          <li>Connect</li>
        </ul>
      </div>
    )
  }
}

export default SubNav
