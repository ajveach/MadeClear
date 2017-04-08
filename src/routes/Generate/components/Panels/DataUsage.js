import React from 'react'
import { Accordion, Checkbox, ControlLabel, FormControl, FormGroup, Panel } from 'react-bootstrap'
import TriggerIdentifiableData from '../../../../components/tooltips/IdentifiableData'
import TriggerAnalytics from '../../../../components/tooltips/Analytics'
import * as ReactDOM from 'react-dom'

export default class DataUsage extends React.Component {
  componentDidMount () {
    this.props.submitHooks.push(policy => {
      Object.keys(this.refs).map(key => {
        if (this.refs[key] instanceof FormControl) {
          policy[key] = ReactDOM.findDOMNode(this.refs[key]).value
        } else if (this.refs[key] instanceof Checkbox) {
          policy[key] = ReactDOM.findDOMNode(this.refs[key]).querySelector('input').checked
        }
      })
    })
  }

  render () {
    return (
      <Accordion>
        <Panel header={'Use:  How we use your data internally'} eventKey='1'>
          <h3 className='panel-subtitle'>
            We collect and use your <TriggerIdentifiableData /> (check all that apply):
          </h3>
          <Checkbox
            ref='dataUsageInternalDataPrimaryService'
            value
          >
            To provide the primary service of the app or technology
          </Checkbox>
          <Checkbox
            ref='dataUsageInternalDataMarketing'
            value
          >
            To develop marketing materials for our products
          </Checkbox>
          <Checkbox
            ref='dataUsageInternalDataResearch'
            value
          >
            To conduct scientific research
          </Checkbox>
          <Checkbox
            ref='dataUsageInternalDataOperations'
            value
          >
            For company operations (e.g., quality control or fraud detection)
          </Checkbox>
          <Checkbox
            ref='dataUsageInternalDataDevelopment'
            value
          >
            To develop and improve new and current products and services (e.g., <TriggerAnalytics />)
          </Checkbox>
          <FormGroup controlId='formDataUsageInternalDataOther'>
            <ControlLabel className='sr-only'>Other</ControlLabel>
            <FormControl
              type='text'
              value={this.props.dataUsageInternalDataOther}
              placeholder='Other'
              ref='formDataUsageInternalDataOther'
            />
          </FormGroup>
        </Panel>
      </Accordion>
    )
  }
}

DataUsage.propTypes = {
  dataUsageInternalDataOther: React.PropTypes.string,
  submitHooks: React.PropTypes.array
}
