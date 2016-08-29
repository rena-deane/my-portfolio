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
              About Piro here.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ProjectTwo
