import React from 'react'
import { Accordion, Checkbox, ControlLabel, FormControl, FormGroup, Panel, Radio } from 'react-bootstrap'

export default class DataPrivacy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      accesses: false,
      accessInfoCamera: false,
      accessInfoPhotos: false,
      accessInfoContacts: false,
      accessInfoLocationServices: false,
      accessInfoMicrophone: false,
      accessInfoHealthMonitoringDevices: false,
      accessInfoOther: '',
      accessInfoLearnMore: '',
      share: 'no',
      shareInfoLearnMore: ''
    }
  }

  componentDidMount () {
    this.props.submitHooks.push(policy => {
      policy['accessesOtherData'] = this.state.accesses
      policy['accessInfoCamera'] = this.state.accessInfoCamera
      policy['accessInfoPhotos'] = this.state.accessInfoPhotos
      policy['accessInfoContacts'] = this.state.accessInfoContacts
      policy['accessInfoLocationServices'] = this.state.accessInfoLocationServices
      policy['accessInfoMicrophone'] = this.state.accessInfoMicrophone
      policy['accessInfoHealthMonitoringDevices'] = this.state.accessInfoHealthMonitoringDevices
      policy['accessInfoOther'] = this.state.accessInfoOther
      policy['accessInfoLearnMore'] = this.state.accessInfoLearnMore
      policy['userCanShare'] = this.state.share
      policy['shareInfoLearnMore'] = this.state.shareInfoLearnMore
    })
  }

  accessInfo () {
    if (!this.state.accesses) {
      return
    }

    return (
      <div className='accessInfo'>
        <Checkbox onChange={(e) => this.setState({ accessInfoCamera: e.target.checked })}>Camera</Checkbox>
        <Checkbox onChange={(e) => this.setState({ accessInfoPhotos: e.target.checked })}>Photos</Checkbox>
        <Checkbox onChange={(e) => this.setState({ accessInfoContacts: e.target.checked })}>Contacts</Checkbox>
        <Checkbox onChange={(e) => this.setState({ accessInfoLocationServices: e.target.checked })}>
          Location Services
        </Checkbox>
        <Checkbox onChange={(e) => this.setState({ accessInfoMicrophone: e.target.checked })}>Microphone</Checkbox>
        <Checkbox onChange={(e) => this.setState({ accessInfoHealthMonitoringDevices: e.target.checked })}>
          Health Monitoring Devices
        </Checkbox>
        <FormGroup controlId='formAccessOther'>
          <ControlLabel className='sr-only'>Other</ControlLabel>
          <FormControl
            type='text'
            placeholder='Other'
            onChange={(e) => this.setState({ accessInfoOther: e.target.value })}
          />
        </FormGroup>
        <FormGroup controlId='formAccessLearnMore'>
          <ControlLabel className='sr-only'>Learn More URL</ControlLabel>
          <FormControl
            type='text'
            placeholder='Learn More URL'
            onChange={(e) => this.setState({ accessInfoLearnMore: e.target.value })}
          />
        </FormGroup>
      </div>
    )
  }

  shareInfo () {
    if (this.state.share === 'no') {
      return
    }

    return (
      <FormGroup controlId='formPrivacyShareLearnMore'>
        <ControlLabel className='sr-only'>Learn More URL</ControlLabel>
        <FormControl
          type='text'
          placeholder='Learn More URL'
          onChange={(e) => this.setState({ shareInfoLearnMore: e.target.value })}
        />
      </FormGroup>
    )
  }

  render () {
    return (
      <Accordion>
        <Panel header={'Privacy: How this technology accesses other data'} eventKey='1'>
          <ControlLabel>
            This technology or app requests access to other device data or applications,
            such as your phone's camera, photos, or contacts
          </ControlLabel>
          <FormGroup>
            <Radio
              inline
              name='dataAccessesOther'
              value='yes'
              onChange={() => this.setState({ accesses: true })}
            >
              Yes
            </Radio>
            {' '}
            <Radio
              inline
              name='dataAccessesOther'
              value='no'
              onChange={() => this.setState({ accesses: false })}
            >
              No
            </Radio>
          </FormGroup>

          {this.accessInfo()}

          <ControlLabel>
            This technology or app allows you to share the collected data with your social media accounts, like Facebook
          </ControlLabel>
          <FormGroup>
            <Radio
              inline
              name='dataPrivacyShare'
              value='yes'
              onChange={() => this.setState({ share: 'yes' })}
            >
              Yes
            </Radio>
            {' '}
            <Radio
              inline
              name='dataPrivacyShare'
              value='yes'
              onChange={() => this.setState({ share: 'yesCondition' })}
            >
              Yes, only with your permission
            </Radio>
            {' '}
            <Radio
              inline
              name='dataPrivacyShare'
              value='no'
              onChange={() => this.setState({ share: 'no' })}
            >
              No
            </Radio>
          </FormGroup>

          {this.shareInfo()}
        </Panel>
      </Accordion>
    )
  }
}

DataPrivacy.propTypes = {
  submitHooks: React.PropTypes.array
}
