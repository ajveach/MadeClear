import React from 'react'
import * as ReactDOM from 'react-dom'
import { Checkbox, Col, ControlLabel, FormControl, FormGroup, Grid, Row } from 'react-bootstrap'

import './Form.scss'
import DataUsage from './Panels/DataUsage'
import DataSharing from './Panels/DataSharing'
import DataSell from './Panels/DataSell'
import HippaCoverage from './Panels/HippaCoverage'
import DataStore from './Panels/DataStore'
import DataEncrypt from './Panels/DataEncrypt'
import DataPrivacy from './Panels/DataPrivacy'
import DataUserOptions from './Panels/DataUserOptions'
import DataDeactivation from './Panels/DataDeactivation'
import DataPolicyChanges from './Panels/DataPolicyChanges'
import DataBreachNotification from './Panels/DataBreachNotification'
import DataGeneral from './Panels/DataGeneral'

export default class Form extends React.Component {
  constructor (props) {
    super(props)

    this.submitHooks = []
    this.state = {
      success: '',
      error: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()

    let policy = {}
    // Get all the values defined in this component
    Object.keys(this.refs).map(key => {
      switch (key) {
        case 'generateForm':
          return
        default:
          Object.keys(this.refs).map(key => {
            if (this.refs[key] instanceof FormControl) {
              policy[key] = ReactDOM.findDOMNode(this.refs[key]).value
            } else if (this.refs[key] instanceof Checkbox) {
              policy[key] = ReactDOM.findDOMNode(this.refs[key]).querySelector('input').checked
            }
          })
          return
      }
    })
    // Fire all submit hooks for children components
    this.submitHooks.map(hook => {
      hook(policy)
    })

    if (!policy.company || !policy.product) {
      this.setState({
        error: 'The form could not be submitted. The company name and product name are both required.',
        success: ''
      })
      return
    } else {
      this.setState({
        error: '',
        success:
          'This policy has been successfully updated.'
      })
    }

    // Set last modified date
    policy.last_modified = +new Date()

    this.props.addPolicy(
      policy
    )
  }

  renderStatus () {
    if (this.state.error) {
      return (
        <div className='alert alert-danger'>{this.state.error}</div>
      )
    } else if (this.state.success) {
      return (
        <div className='alert alert-success'>
          {this.state.success}
          {' '}
          View the policy
          {' '}
          <a
            href={'/policy/' + this.props.policy.company + '/' + this.props.policy.product}
            title='View policy'
            target='_blank'
          >
            {' '}
            here
          </a>
        </div>
      )
    }

    return
  }

  render () {
    return (
      <div className='generate-form-container'>
        <Grid>
          <form ref='generateForm' className='generate-form' onSubmit={(e) => this.handleSubmit(e)}>
            {this.renderStatus()}
            <Row>
              <Col md={6}>
                <FormGroup controlId='formCompany' ref='formCompany'>
                  <ControlLabel className='sr-only'>Company Name</ControlLabel>
                  <FormControl
                    type='text'
                    value={this.props.company}
                    placeholder='Company Name'
                    ref='company'
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId='formProduct' ref='formProduct'>
                  <ControlLabel className='sr-only'>Product Name</ControlLabel>
                  <FormControl
                    type='text'
                    value={this.props.product}
                    placeholder='Product Name'
                    ref='product'
                  />
                </FormGroup>
              </Col>
            </Row>

            <HippaCoverage submitHooks={this.submitHooks} />
            <DataUsage submitHooks={this.submitHooks} />
            <DataSharing submitHooks={this.submitHooks} />
            <DataSell submitHooks={this.submitHooks} />
            <DataStore submitHooks={this.submitHooks} />
            <DataEncrypt submitHooks={this.submitHooks} />
            <DataPrivacy submitHooks={this.submitHooks} />
            <DataUserOptions submitHooks={this.submitHooks} />
            <DataDeactivation submitHooks={this.submitHooks} />
            <DataPolicyChanges submitHooks={this.submitHooks} />
            <DataBreachNotification submitHooks={this.submitHooks} />
            <DataGeneral submitHooks={this.submitHooks} />

            <input type='submit' value='Submit' className='btn btn-lg btn-primary' />
          </form>
        </Grid>
      </div>
    )
  }
}

Form.propTypes = {
  company: React.PropTypes.string,
  product: React.PropTypes.string,
  addPolicy: React.PropTypes.func,
  policy: React.PropTypes.object
}
