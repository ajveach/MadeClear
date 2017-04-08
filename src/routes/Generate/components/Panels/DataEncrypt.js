import React from 'react'
import { Accordion, ControlLabel, FormControl, FormGroup, Panel, Radio } from 'react-bootstrap'
import * as ReactDOM from 'react-dom'
import TriggerCloudComputing from '../../../../components/tooltips/CloudComputing'

export default class DataEncrypt extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      device: null,
      deviceAdditionalInfo: '',
      outside: null,
      outsideAdditionalInfo: '',
      transmitted: null,
      transmittedAdditionalInfo: ''
    }
  }

  componentDidMount () {
    this.props.submitHooks.push(policy => {
      policy['deviceEncryption'] = this.state.device
      policy['deviceEncryptionAdditionalInfo'] = this.state.deviceAdditionalInfo
      policy['outsideEncryption'] = this.state.outside
      policy['outsideEncryptionAdditionalInfo'] = this.state.outsideAdditionalInfo
      policy['transmittedEncryption'] = this.state.transmitted
      policy['transmittedEncryptionAdditionalInfo'] = this.state.transmittedAdditionalInfo
    })
  }

  deviceAdditionalInfo () {
    if (this.state.device === 'yesCondition') {
      return (
        <FormGroup controlId='formDataEncryptDeviceInfo'>
          <ControlLabel className='sr-only'>Information about steps using encryption</ControlLabel>
          <FormControl
            type='text'
            placeholder='Information about steps using encryption'
            ref='dataEncryptDeviceInfo'
            onChange={
              () => this.setState({ deviceAdditionalInfo: ReactDOM.findDOMNode(this.refs.dataEncryptDeviceInfo).value })
            }
          />
        </FormGroup>
      )
    }
  }

  outsideAdditionalInfo () {
    if (this.state.outside === 'yesCondition') {
      return (
        <FormGroup controlId='formDataEncryptOutsideInfo'>
          <ControlLabel className='sr-only'>Information about steps using encryption</ControlLabel>
          <FormControl
            type='text'
            placeholder='Information about steps using encryption'
            ref='dataEncryptOutsideInfo'
            onChange={
              () => this.setState(
                { outsideAdditionalInfo: ReactDOM.findDOMNode(this.refs.dataEncryptOutsideInfo).value }
              )
            }
          />
        </FormGroup>
      )
    }
  }

  transmittedAdditionalInfo () {
    if (this.state.transmitted === 'yesCondition') {
      return (
        <FormGroup controlId='formDataEncryptTransmittedInfo'>
          <ControlLabel className='sr-only'>Information about steps using encryption</ControlLabel>
          <FormControl
            type='text'
            placeholder='Information about steps using encryption'
            ref='dataEncryptTransmittedInfo'
            onChange={
              () => this.setState(
                { transmittedAdditionalInfo: ReactDOM.findDOMNode(this.refs.dataEncryptTransmittedInfo).value }
              )
            }
          />
        </FormGroup>
      )
    }
  }

  render () {
    return (
      <Accordion>
        <Panel header={'Encryption: How we encrypt your data'} eventKey='1'>
          <ControlLabel>
            We encrypt your data in the device or app
          </ControlLabel>
          <FormGroup>
            <Radio
              inline
              name='dataEncryptDevice'
              value='yes'
              onChange={() => this.setState({ device:'yes' })}
            >
              Yes
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptDevice'
              value='yesOnCertainSteps'
              onChange={() => this.setState({ device:'yesCondition' })}
            >
              Yes, when you take certain steps
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptDevice'
              value='no'
              onChange={() => this.setState({ device:'no' })}
            >
              No
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptDevice'
              value='n/a'
              onChange={() => this.setState({ device:'n/a' })}
            >
              N/A
            </Radio>
          </FormGroup>

          {this.deviceAdditionalInfo()}

          <ControlLabel>
            We encrypt your data when stored on our company servers or with
            an outside <TriggerCloudComputing /> services provider
          </ControlLabel>
          <FormGroup>
            <Radio
              inline
              name='dataEncryptOutside'
              value='yes'
              onChange={() => this.setState({ outside:'yes' })}
            >
              Yes
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptOutside'
              value='yesOnCertainSteps'
              onChange={() => this.setState({ outside:'yesCondition' })}
            >
              Yes, when you take certain steps
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptOutside'
              value='no'
              onChange={() => this.setState({ outside:'no' })}
            >
              No
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptOutside'
              value='n/a'
              onChange={() => this.setState({ outside:'n/a' })}
            >
              N/A
            </Radio>
          </FormGroup>

          {this.outsideAdditionalInfo()}

          <ControlLabel>
            We encrypt your data when it is transmitted
          </ControlLabel>
          <FormGroup>
            <Radio
              inline
              name='dataEncryptTransmitted'
              value='yes'
              onChange={() => this.setState({ transmitted:'yes' })}
            >
              Yes
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptTransmitted'
              value='yesOnCertainSteps'
              onChange={() => this.setState({ transmitted:'yesCondition' })}
            >
              Yes, when you take certain steps
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptTransmitted'
              value='no'
              onChange={() => this.setState({ transmitted:'no' })}
            >
              No
            </Radio>
            {' '}
            <Radio
              inline
              name='dataEncryptTransmitted'
              value='n/a'
              onChange={() => this.setState({ transmitted:'n/a' })}
            >
              N/A
            </Radio>
          </FormGroup>

          {this.transmittedAdditionalInfo()}
        </Panel>
      </Accordion>
    )
  }
}

DataEncrypt.propTypes = {
  submitHooks: React.PropTypes.array
}
