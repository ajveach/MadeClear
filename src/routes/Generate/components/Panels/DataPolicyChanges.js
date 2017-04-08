import React from 'react'
import { Accordion, ControlLabel, FormControl, FormGroup, Panel } from 'react-bootstrap'

export default class DataPolicyChanges extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notificationOfChangeDescription: '',
      notificationOfChangePolicyURL: ''
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
          header={'Policy Changes: How we will notify you if our privacy policy changes'}
          eventKey='1'
        >
          <ControlLabel>
            Describe how/if the company will notify consumers of privacy policy changes (e.g. merger or acquisition)
          </ControlLabel>
          <FormGroup controlId='notificationDescription'>
            <ControlLabel className='sr-only'>Notification description</ControlLabel>
            <FormControl
              componentClass='textarea'
              onChange={(e) => this.setState({ notificationOfChangeDescription: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='notificationLink'>
            <ControlLabel className='sr-only'>Link to relevant section of privacy policy</ControlLabel>
            <FormControl
              type='text'
              placeholder='Link to relevant section of privacy policy'
              onChange={(e) => this.setState({ notificationOfChangePolicyURL: e.target.value })}
            />
          </FormGroup>
        </Panel>
      </Accordion>
    )
  }
}

DataPolicyChanges.propTypes = {
  submitHooks: React.PropTypes.array
}
