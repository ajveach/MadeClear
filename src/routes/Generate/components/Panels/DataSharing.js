import React from 'react'
import { Accordion, Checkbox, ControlLabel, FormControl, FormGroup, Panel } from 'react-bootstrap'
import TriggerIdentifiableData from '../../../../components/tooltips/IdentifiableData'
import TriggerAnalytics from '../../../../components/tooltips/Analytics'
import * as ReactDOM from 'react-dom'

export default class DataSharing extends React.Component {
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
        <Panel
          header={'Share: How we share your data externally with other companies or entities'}
          eventKey='1'
        >
          <h3 className='panel-subtitle'>We share your <TriggerIdentifiableData /> (check all that apply):</h3>
          <Checkbox
            ref='dataSharingExternalDataPrimaryService'
            value
          >
            To provide the primary service of the app or technology
          </Checkbox>
          <Checkbox
            ref='dataSharingExternalDataResearch'
            value
          >
            To conduct scientific research
          </Checkbox>
          <Checkbox
            ref='dataSharingExternalDataOperations'
            value
          >
            For company operations (e.g., quality control or fraud detection)
          </Checkbox>
          <Checkbox
            ref='dataSharingExternalDataDevelopment'
            value
          >
            To develop and improve new and current products and services (e.g., <TriggerAnalytics />)
          </Checkbox>
          <FormGroup controlId='formDataSharingExternalDataOther'>
            <ControlLabel className='sr-only'>Other</ControlLabel>
            <FormControl
              type='text'
              value={this.props.dataSharingExternalDataOther}
              placeholder='Other'
              ref='dataSharingExternalDataOther'
            />
          </FormGroup>
          <Checkbox
            ref='dataSharingExternalDataNone'
            value
          >
            We DO NOT share your <TriggerIdentifiableData />.
          </Checkbox>

          <h3 className='panel-subtitle'>
            We share your data AFTER removing identifiers (note that remaining data may not be anonymous):
          </h3>
          <Checkbox
            ref='dataSharingExternalDataNoIdentifiersPrimaryService'
            value
          >
            For the primary service of the app or technology
          </Checkbox>
          <Checkbox
            ref='dataSharingExternalDataNoIdentifiersResearch'
            value
          >
            To conduct scientific research
          </Checkbox>
          <Checkbox
            ref='dataSharingExternalDataNoIdentifiersOperations'
            value
          >
            For company operations (e.g., quality control or fraud detection)
          </Checkbox>
          <Checkbox
            ref='dataSharingExternalDataNoIdentifiersDevelopment'
            value
          >
            To develop and improve new and current products and services (e.g., <TriggerAnalytics />)
          </Checkbox>
          <FormGroup controlId='formDataSharingExternalDataNoIdentifiersOther'>
            <ControlLabel className='sr-only'>Other</ControlLabel>
            <FormControl
              type='text'
              value={this.props.dataSharingExternalDataNoIdentifiersOther}
              placeholder='Other'
              ref='dataSharingExternalDataNoIdentifiersOther'
            />
          </FormGroup>
          <Checkbox
            ref='dataSharingExternalDataNoIdentifiersNone'
            value
          >
            We DO NOT share your data after removing identifiers
          </Checkbox>
        </Panel>
      </Accordion>
    )
  }
}

DataSharing.propTypes = {
  dataSharingExternalDataOther: React.PropTypes.string,
  dataSharingExternalDataNoIdentifiersOther: React.PropTypes.string,
  submitHooks: React.PropTypes.array
}
