import React from 'react';
import {Col, Grid, Image, Row} from 'react-bootstrap';

import './WhatHappensToData.scss'

export default class WhatHappensToData extends React.Component{
  render(){
    return (
      <div className='what-happens-to-data'>
        <Grid>
          <h2 className='segment-title'>What happens to your data after it is deactivated?</h2>
          <Row>
            <Col md={6} mdOffset={2}>
              <p>When your account is deactivated or terminated by you or {this.props.params.companyName}, your data are deleted after <strong>10</strong> years.</p>
            </Col>
            <Col md={3} className='segment-icon'>
              <Image src='/img/icons/10Icon.png'/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}