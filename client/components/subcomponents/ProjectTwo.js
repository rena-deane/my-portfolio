import React, { Component } from 'react'
import { Button, Modal, ModalHeader } from 'react-bootstrap'


class ProjectTwo extends Component {
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
          2. PIRO
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className='about-headings'>PIRO - Live scoring app</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className='project-content'>
              <a href='http://piro.co.nz/'>PIRO.co.nz</a> is a live scoring app.  The app allows you to
            </p>
            <ul className='content-list'>
              <li>Score any sport that is one on one</li>
              <li>Increment scores by one</li>
              <li>Start, Pause and Stop time</li>
              <li>Add lines of commentary</li>
              <li>All updates are live using web sockets</li>
              <li>Favourite the games you want to follow</li>
              <li>Create a game</li>
              <li>Filter the games you have created</li>
            </ul>

            <p className='project-content'>
              There is an opportunity to add features like:
            </p>
            <ul className='content-list'>
              <li>Having a console that is sports specific</li>
              <li>Scoring individual sports</li>
              <li>Notifications for games you follow</li>
              <li>Filter games by location</li>
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ProjectTwo
