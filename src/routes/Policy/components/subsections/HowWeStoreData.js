import React from 'react'
import { Row, Col, Grid, Image } from 'react-bootstrap'

import './HowWeStoreData.scss'

export default class HowWeStoreData extends React.Component {
  render () {
    return (
      <div className='how-we-store-data'>
        <Grid>
          <div className='content'>
            <h2 className='segment-title'>How we store your data</h2>
            <Row>
              <Col md={3} className='segment-icon'>
                <Image src='/img/icons/03Icon.png' />
              </Col>
              <Col md={8} mdOffset={1}>
                <h3 className='segment-subtitle'>We <strong>do</strong> store your data on your device.</h3>
                <h3 className='segment-subtitle'>
                  Your data <strong>is not</strong> stored by our company or a third party
                </h3>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
