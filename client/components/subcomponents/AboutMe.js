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
                I was born and bred on the East Coast of the North Island, Ruatoria and Rangitukia.  Here, I was immersed in te reo me ona tikanga.
              </p>

              <p className='about-content'>
                I love getting together with whanau and friends, food, sports, swimming and doing bombs (sometimes), breathing in fresh country air, and learning about new techonologies, teaching what I have learnt, and creating things - anything.
              </p>

              <p className='about-content'>
                I’m fortunate to come from a family who really value education and I’m aware that not everyone has this foundation.  So I strongly believe in the saying, “When you learn, teach“.  When I feel like I’ve learnt all I can I hope one day I’ll be able to introduce and teach programming to rural communities around the country starting with my beloved East Coast.  Most importantly I want to spread the message of how important education is and that it’s all around us.
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
