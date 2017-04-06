import React from 'react'
import * as ReactDOM from 'react-dom'
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row } from 'react-bootstrap'

import './Form.scss'

export default class Form extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    console.log(ReactDOM.findDOMNode(this.refs.productName).value)
  }

  render () {
    return (
      <div className='generate-form-container'>
        <Grid>
          <form ref='generateForm' className='generate-form' onSubmit={(e) => this.handleSubmit(e)}>
            <Row>
              <Col md={6}>
                <FormGroup controlId='formCompanyName'>
                  <ControlLabel className='sr-only'>Company Name</ControlLabel>
                  <FormControl
                    type='text'
                    value={this.props.companyName}
                    placeholder='Company Name'
                    ref='companyName'
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId='formProductName'>
                  <ControlLabel className='sr-only'>Product Name</ControlLabel>
                  <FormControl
                    type='text'
                    value={this.props.productName}
                    placeholder='Product Name'
                    ref='productName'
                  />
                </FormGroup>
              </Col>
            </Row>
            <input type='submit' value='Submit' className='btn btn-lg btn-primary' />
          </form>
        </Grid>
      </div>
    )
  }
}

Form.propTypes = {
  companyName: React.PropTypes.string,
  productName: React.PropTypes.string
}
