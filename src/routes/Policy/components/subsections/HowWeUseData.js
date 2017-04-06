import React from 'react'
import TriggerIdentifiableData from '../../../../components/tooltips/IdentifiableData'
import { Col, Grid, Image, Row } from 'react-bootstrap'

export default class HowWeUseData extends React.Component {
  render () {
    return (
      <div className='how-we-use-identifiable-data segment-list container'>
        <Grid>
          <div className='content'>
            <h2 className='segment-title'>How we use your data internally</h2>
            <Row>
              <Col md={3} className='segment-icon'>
                <Image src='/img/icons/01Icon2.png' />
              </Col>
              <Col md={9}>
                <h3 className='segment-subtitle'>We collect and use your <TriggerIdentifiableData /></h3>
                <ul>
                  <li>
                    To provide the <span className='policy-tooltip'>primary service</span> of the app or technology
                  </li>
                  <li>To develop marketing material for our products</li>
                  <li>To conduct scientific research</li>
                  <li>For company operations (e.g., quality control or fraud detection)</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
