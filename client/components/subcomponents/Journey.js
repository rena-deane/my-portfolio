import React, { Component } from 'react'
import { Button, Modal, ModalHeader, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'


class Journey extends Component {
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
      <div className='about-modals'>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
          Te Ara / Journey
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className='about-headings'>Te Ara / Journey</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <p className='about-content'>
              My journey
            </p>

          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Journey
