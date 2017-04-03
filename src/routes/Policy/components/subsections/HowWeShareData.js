import React from 'react';
import { Col, Grid, Image, Row } from 'react-bootstrap'
import TriggerIdentifiableData from '../../../../components/tooltips/IdentifiableData'

export default class HowWeShareData extends React.Component{
  render(){
    return(
      <div className="segment-list how-we-share-data-externally">
        <Grid>
          <div className="content">
            <h2 className="segment-title">How we share your data externally with other companies or entities</h2>
            <Row>
              <Col md={3} className="segment-icon">
                <Image src="/img/icons/02Icon.png"/>
              </Col>
              <Col md={9}>
                <h3 className="segment-subtitle">We share your <TriggerIdentifiableData/></h3>
                <ul>
                  <li>To provide the <span className="policy-tooltip">primary service</span> of the app or technology</li>
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