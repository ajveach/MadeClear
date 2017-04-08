import React from 'react'
import { Accordion, Checkbox, ControlLabel, FormControl, FormGroup, Panel, Radio } from 'react-bootstrap'

export default class DataUserOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userOptionsAvailable: false,
      userOptionsAccess: false,
      userOptionsEdit: false,
      userOptionsShare: false,
      userOptionsDelete: false,
      userOptionsLearnMore: ''
    }
  }

  componentDidMount () {
    this.props.submitHooks.push(policy => {
      Object.keys(this.state).map(key => {
        policy[key] = this.state[key]
      })
    })
  }

  avaialbleOptions () {
    if (!this.state.userOptionsAvailable) {
      return
    }

    return (
      <div className='userOptionsAvailable'>
        <Checkbox onChange={(e) => this.setState({ userOptionsAccess: e.target.checked })}>Access your data</Checkbox>
        <Checkbox onChange={(e) => this.setState({ userOptionsEdit: e.target.checked })}>Edit your data</Checkbox>
        <Checkbox onChange={(e) => this.setState({ userOptionsShare: e.target.checked })}>Share your data</Checkbox>
        <Checkbox onChange={(e) => this.setState({ userOptionsDelete: e.target.checked })}>Delete your data</Checkbox>
        <FormGroup controlId='userOptionsLearnMore'>
          <ControlLabel className='sr-only'>Learn more URL</ControlLabel>
          <FormControl
            type='text'
            placeholder='Learn more URL'
            onChange={(e) => this.setState({ userOptionsLearnMore: e.target.value })}
          />
        </FormGroup>
      </div>
    )
  }

  render () {
    return (
      <Accordion>
        <Panel header={'User Options: What you can do with the data that we collect'} eventKey='1'>
          <ControlLabel>
            With this technology or app you can access, edit, share, or delete the data we have about you
          </ControlLabel>
          <FormGroup>
            <Radio
              inline
              name='userOptionsAvailable'
              value='yes'
              onChange={() => this.setState({ userOptionsAvailable: true })}
            >
              Yes
            </Radio>
            {' '}
            <Radio
              inline
              name='userOptionsAvailable'
              value='no'
              onChange={() => this.setState({ userOptionsAvailable: false })}
            >
              No
            </Radio>
          </FormGroup>

          {this.avaialbleOptions()}
        </Panel>
      </Accordion>
    )
  }
}

DataUserOptions.propTypes = {
  submitHooks: React.PropTypes.array
}
