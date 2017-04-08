import React from 'react'
import { Accordion, Checkbox, ControlLabel, FormControl, FormGroup, Panel } from 'react-bootstrap'
import * as ReactDOM from 'react-dom'

export default class HippaCoverage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hippaCoverage: this.props.hippaUrl
    }
  }

  setHippaCoverage (covered) {
    this.setState({
      hippaCoverage: covered
    })
  }

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
    let urlField

    if (this.state.hippaCoverage) {
      urlField = <FormGroup controlId='formHippaUrl'>
        <ControlLabel className='sr-only'>URL to HIPPA Notice of Privacy Practices</ControlLabel>
        <FormControl
          type='url'
          value={this.props.hippaUrl}
          placeholder='URL to HIPPA Notice of Privacy Practices'
          ref='hippaUrl'
        />
      </FormGroup>
    }

    return (
      <Accordion>
        <Panel header={'HIPAA Coverage'} eventKey='1'>
          <Checkbox
            value
            ref='hippaCoverage'
            onChange={(e) => { this.setHippaCoverage(e.target.checked) }}
          >
            My company is a HIPAA covered entity
          </Checkbox>

          {urlField}
        </Panel>
      </Accordion>
    )
  }
}

HippaCoverage.propTypes = {
  hippaUrl: React.PropTypes.string,
  submitHooks: React.PropTypes.array
}
