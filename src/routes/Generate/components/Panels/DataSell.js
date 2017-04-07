import React from 'react'
import { Accordion, ControlLabel, FormGroup, Panel, Radio } from 'react-bootstrap'
import TriggerIdentifiableData from '../../../../components/tooltips/IdentifiableData'
import TriggerDataBroker from '../../../../components/tooltips/DataBroker'
import * as ReactDOM from 'react-dom'

export default class DataSell extends React.Component {
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
        <Panel header={'Sell: To whom do your sell your users\' data?'} eventKey='1'>
          <ControlLabel>
            We sell your <TriggerIdentifiableData /> to <TriggerDataBroker />,
            marketing, advertising networks, or analytics firms:
          </ControlLabel>
          <FormGroup>
            <Radio inline ref='dataSellIdentifiableYes' name='dataSellIdentifiable' value='yes'>
              Yes
            </Radio>
            {' '}
            <Radio inline ref='dataSellIdentifiableYesCondition' name='dataSellIdentifiable' value='yesWithPermission'>
              Yes; only with your permission
            </Radio>
            {' '}
            <Radio inline ref='dataSellIdentifiableNo' name='dataSellIdentifiable' value='no'>
              No
            </Radio>
          </FormGroup>

          <ControlLabel>
            We sell your data AFTER removing identifiers (note that remaining data may not be anonymous)
            to <TriggerDataBroker />, marketing, advertising networks, or analytics firms:
          </ControlLabel>
          <FormGroup>
            <Radio inline ref='dataSellNotIdentifiableYes' name='dataSellNotIdentifiable' value='yes'>
              Yes
            </Radio>
            {' '}
            <Radio
              inline
              ref='dataSellNotIdentifiableYesCondition'
              name='dataSellNotIdentifiable'
              value='yesWithPermission'
            >
              Yes; only with your permission
            </Radio>
            {' '}
            <Radio inline ref='dataSellNotIdentifiableNo' name='dataSellNotIdentifiable' value='no'>
              No
            </Radio>
          </FormGroup>
        </Panel>
      </Accordion>
    )
  }
}

DataSell.propTypes = {
  submitHooks: React.PropTypes.array
}
