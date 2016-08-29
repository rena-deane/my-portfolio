import React, { Component } from 'react'
import { Button, Modal, ModalHeader, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'


class AboutMe extends Component {
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
          Ko Au / About Me
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title className='about-headings'>Ko Au / About Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='pepeha'>
              <h3>Ko Hikurangi te maunga,</h3>
              <h3>Ko Waiapu te awa,</h3>
              <h3>Ko Ngati Porou te iwi</h3>
            </div>

            <div className='aboutme'>
              <p className='about-content'>
                Born and bred on the East Coast of the North Island, Ruatoria and Rangitukia.
              </p>

              <p className='about-content'>
                I was raised and immersed in a culturally strong environment where the traditions, practices and perspectives of my whanau, hapu and iwi were exercised daily.
              </p>

              <p className='about-content'>
                This cultural strength provides me with the confidence and competence to act, think and behave in ways that allow me to recognise and respect the distinctiveness of others.
              </p>
            </div>

            <h6>Coming soon ... map of the East Coast</h6>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default AboutMe
