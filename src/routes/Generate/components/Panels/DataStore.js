import React from 'react'
import { Accordion, ControlLabel, FormGroup, Panel, Radio } from 'react-bootstrap'
import * as ReactDOM from 'react-dom'

export default class DataStore extends React.Component {
  componentDidMount () {
    this.props.submitHooks.push(policy => {
      Object.keys(this.refs).map(key => {
        if (this.refs[key] instanceof Radio) {
          policy[key] = ReactDOM.findDOMNode(this.refs[key]).querySelector('input').checked
        }
      })
    })
  }

  render () {
    return (
      <Accordion>
        <Panel header={'Store: How we store your data'} eventKey='1'>
          <ControlLabel>
            We store your data on the device
          </ControlLabel>
          <FormGroup>
            <Radio inline ref='dataStoreDeviceYes' name='dataStoreDevice' value='yes'>
              Yes
            </Radio>
            {' '}
            <Radio inline ref='dataStoreDeviceNo' name='dataStoreDevice' value='no'>
              No
            </Radio>
          </FormGroup>

          <ControlLabel>
            We store your data outside the device at our company or through a third party
          </ControlLabel>
          <FormGroup>
            <Radio inline ref='dataStoreOutsideYes' name='dataStoreOutside' value='yes'>
              Yes
            </Radio>
            {' '}
            <Radio inline ref='dataStoreOutsideNo' name='dataStoreOutside' value='no'>
              No
            </Radio>
          </FormGroup>
        </Panel>
      </Accordion>
    )
  }
}

DataStore.propTypes = {
  submitHooks: React.PropTypes.array
}
