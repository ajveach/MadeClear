import React from 'react'
import { Accordion, ControlLabel, FormControl, FormGroup, Panel } from 'react-bootstrap'
import TriggerBreach from '../../../../components/tooltips/Breach'

export default class DataBreachNotification extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notificationOfBreachDescription: '',
      notificationOfBreachPolicyURL: ''
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
          header={'Breach: How we will notify you and protect your data in case of an improper disclosure'}
          eventKey='1'
        >
          <ControlLabel>
            Describe how the company will protect consumers' data in the case of a <TriggerBreach />
          </ControlLabel>
          <FormGroup controlId='notificationDescription'>
            <ControlLabel className='sr-only'>Notification description</ControlLabel>
            <FormControl
              componentClass='textarea'
              onChange={(e) => this.setState({ notificationOfBreachDescription: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='notificationLink'>
            <ControlLabel className='sr-only'>Link to relevant section of privacy policy</ControlLabel>
            <FormControl
              type='text'
              placeholder='Link to relevant section of privacy policy'
              onChange={(e) => this.setState({ notificationOfBreachPolicyURL: e.target.value })}
            />
          </FormGroup>
        </Panel>
      </Accordion>
    )
  }
}

DataBreachNotification.propTypes = {
  submitHooks: React.PropTypes.array
}
