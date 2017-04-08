import React from 'react'
import { Accordion, ControlLabel, FormControl, FormGroup, Panel } from 'react-bootstrap'

export default class DataGeneral extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      primaryURL: '',
      privacyPolicyURL: '',
      contactFormURL: '',
      email: '',
      phone: '',
      address: ''
    }
  }

  componentDidMount () {
    this.props.submitHooks.push(policy => {
      Object.keys(this.state).map(key => {
        policy[key] = this.state[key]
      })
    })
  }

  render () {
    return (
      <Accordion>
        <Panel
          header={'Contact Information'}
          eventKey='1'
        >
          <FormGroup controlId='primaryURL'>
            <ControlLabel className='sr-only'>Primary Website URL</ControlLabel>
            <FormControl
              type='url'
              placeholder='Primary Website URL'
              required
              onChange={(e) => this.setState({ primaryURL: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='privacyPolicyURL'>
            <ControlLabel className='sr-only'>Privacy Policy URL</ControlLabel>
            <FormControl
              type='url'
              placeholder='Privacy Policy URL'
              onChange={(e) => this.setState({ privacyPolicyURL: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='contactFormURL'>
            <ControlLabel className='sr-only'>Online comment/contact form URL</ControlLabel>
            <FormControl
              type='url'
              placeholder='Online comment/contact form URL'
              onChange={(e) => this.setState({ contactFormURL: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='email'>
            <ControlLabel className='sr-only'>Email address</ControlLabel>
            <FormControl
              type='email'
              placeholder='Email address'
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='phone'>
            <ControlLabel className='sr-only'>Phone number</ControlLabel>
            <FormControl
              type='tel'
              placeholder='Phone number'
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='address'>
            <ControlLabel className='sr-only'>Address (minimum: country)</ControlLabel>
            <FormControl
              componentClass='textarea'
              placeholder='Address (minimum: country)'
              required
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </FormGroup>
        </Panel>
      </Accordion>
    )
  }
}

DataGeneral.propTypes = {
  submitHooks: React.PropTypes.array
}
