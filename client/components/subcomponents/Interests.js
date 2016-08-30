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
            <ul className='content-list'>
              <li>Kapa Haka (professional Spectator)</li>
              <li>Rugby Spectator</li>
              <li>Amateurish Photography</li>
              <li>Home Video Edits (Check out my <a href='https://vimeo.com/user7362145'>Vimeo</a> profile)</li>
              <li>Adobeing things with Ps Ai Pr sometimes Au</li>
              <li>Music</li>
              <li>R & B Soul/Hip Hop & the 90s</li>
              <li>Wannabe DIYer</li>
              <li>There is more, I just cant think of any at the moment</li>
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Interests
