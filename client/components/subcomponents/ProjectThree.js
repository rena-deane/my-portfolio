import React, { Component } from 'react'
import { Button, Modal, ModalHeader } from 'react-bootstrap'


class ProjectThree extends Component {
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
          3. AuthMe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className='about-headings'>AuthMe - Authentication Template</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className='project-content'>
              <a href='https://github.com/rena-deane/group-project-auth'>GitHub Source</a> for AuthMe
            </p>
            <p className='project-content'>
              For a group project we created a template for using PASSPORT to create a login page.  It is yet to be deployed but the <a href='https://github.com/rena-deane/group-project-auth'>source code</a> can be viewed on <a href='https://github.com/rena-deane/group-project-auth'>GitHub</a>.  This was us scrapping the Authentication surface.
            </p>
            <p className='project-content'>
              <strong>Creepy Crawly:</strong> At the moment you can register a username that already exists.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ProjectThree
