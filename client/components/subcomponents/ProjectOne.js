import React, { Component } from 'react'
import { Button, Modal, ModalHeader } from 'react-bootstrap'


class ProjectOne extends Component {
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

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <div className='project-modals'>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
          1. Te Takapau a Maui
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className='about-headings'>Te Takapau a Maui</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <p className='project-content'>
              The intention behind this project was use ReactJS and ThreeJS to create a virtual tour of the carvings that sit on top of Hikurangi maunga on the East Coast of the North Island, New Zealand.
            </p>

            <p className='project-content'>
              I intend to continue on this project to apply and learn more technologies such as
              <ul className='content-list'>
                <li>Redux</li>
                <li>ReduxThunk</li>
                <li>ImmutableJS</li>
                <li>BabylonJS</li>
                <li>ThreeJS</li>
                <li>ReactMotion</li>
                <li>PostGIS</li>
                <li>and many more...</li>
              </ul>
            </p>

            <p className='project-content'>
              View the work in progress <a href='https://rena-deane.github.io/hikurangi-takapau'>here</a>
            </p>

          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ProjectOne
