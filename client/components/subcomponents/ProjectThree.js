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
              What is AuthMe?
            </p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ProjectThree
