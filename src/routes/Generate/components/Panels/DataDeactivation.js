import React from 'react'
import { Accordion, ControlLabel, FormControl, FormGroup, Panel, Radio } from 'react-bootstrap'
import TriggerDeactivation from '../../../../components/tooltips/Deactivation'

export default class DataDeactivation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataDeactivation: null,
      dataDeactivationDelay: 0
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
          header={'Data Deactivation: What happens to your users\' data when the account is deactivated?'}
          eventKey='1'
        >
          <ControlLabel>
            When your account is <TriggerDeactivation />/terminated by you or the company, your data are
          </ControlLabel>
          <div>
            <Radio
              inline
              name='dataDeactivation'
              onChange={() => this.setState({ dataDeactivation: 'deletedImmediately' })}
            >
              Deleted Immediately
            </Radio>
          </div>
          <div>
            <Radio
              inline
              name='dataDeactivation'
              onChange={() => this.setState({ dataDeactivation: 'deletedAfterXYears' })}
            >
              Deleted after a specific number of years
            </Radio>

            {this.state.dataDeactivation === 'deletedAfterXYears' &&
              <FormGroup controlId='dataDeactivationDelay'>
                <ControlLabel className='sr-only'>Number of years until deletion</ControlLabel>
                <FormControl
                  type='number'
                  step='any'
                  placeholder='Number of years until deletion'
                  onChange={(e) => this.setState({ dataDeactivationDelay: e.target.value })}
                />
              </FormGroup>
            }
          </div>
          <div>
            <Radio
              inline
              name='dataDeactivation'
              onChange={() => this.setState({ dataDeactivation: 'permanentlyRetainedAndUsed' })}
            >
              Permanently Retained and Used
            </Radio>
          </div>
          <div>
            <Radio
              inline
              name='dataDeactivation'
              onChange={() => this.setState({ dataDeactivation: 'retainedUntilDeletionRequested' })}
            >
              Retained and used until you request deletion
            </Radio>
          </div>
        </Panel>
      </Accordion>
    )
  }
}

DataDeactivation.propTypes = {
  submitHooks: React.PropTypes.array
}
