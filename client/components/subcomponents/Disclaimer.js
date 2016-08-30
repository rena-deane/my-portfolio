import React, { Component } from 'react'
import { Button, Modal, ModalHeader, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'


class Disclaimer extends Component {
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
      <div className='disclaimer-modal'>
        <Button
          bsStyle="primary"
          bsSize="large"
          className='disclaimer-btn'
          onClick={this.open.bind(this)}
        >
          &copy; Rena-Deane. Not a lawyer.
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className='about-headings'>I am no legal eagle but I gots to protect my behind.</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <p className='about-content'>
              Rena-Deane reserves the right not to be responsible for the topicality, correctness, completeness or quality of the information provided.  Information on this site is a way to share information about me.  I am not responsible for the misuse and or misinterpretation of the content on this site.
            </p>

            <p className='about-content'>
              Do not reuse photos that are not stock photos without seeking permission from me first.
            </p>

          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Disclaimer