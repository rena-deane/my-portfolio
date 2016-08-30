import React, { Component } from 'react'
import { Button, Modal, ModalHeader, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'


class Interests extends Component {
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
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    )
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    )

    return (
      <div className='about-modals'>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
          Manawareka / My Jam
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className='about-headings'>Manawareka / My Jam</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className='about-content'>
              I challenged myself to follow that passion and pursue a career in Web Development.  As a result, I am a highly motivated and enthusiastic graduate of Enspiral Dev Academy where I continue to learn everyday.  I am motivated by the opportunities technology can provide to our people. Especially those in rural areas.  Small towns can benefit from untilising various technologies such as mapping, e-tourism, e-commerce and accessible learning resources.
            </p>
            <p className='about-content'>
            I believe in the saying, “When you learn, teach“.  When I feel like I’ve learnt all I can I hope one day I’ll be able to introduce and teach programming to rural communities around the country starting with my beloved East Coast.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Interests
