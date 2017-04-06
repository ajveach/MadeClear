import React from 'react'
import { Col, Grid, Image, Row } from 'react-bootstrap'
import TriggerIdentifiableData from '../../../../components/tooltips/IdentifiableData'

export default class ToWhomWeSellData extends React.Component {
  render () {
    return (
      <div className='who-we-sell-data-to'>
        <Grid>
          <div className='content'>
            <h2 className='segment-title'>To whom we sell your data</h2>
            <Row>
              <Col md={3} className='segment-icon'>
                <Image src='/img/icons/02_5Icon.png' />
              </Col>
              <Col md={9}>
                <h3 className='segment-subtitle'>
                  We <strong>do</strong> sell your <TriggerIdentifiableData /> to:
                </h3>
                <ul>
                  <li>data brokers</li>
                  <li>marketing &amp; advertising networks</li>
                  <li>analytics firms</li>
                </ul>
                <h3 className='segment-subtitle'>
                  We <strong>do not</strong> sell your data AFTER removing identifiers to
                  (note that remaining data may not be anonymous):
                </h3>
                <ul>
                  <li>data brokers</li>
                  <li>marketing &amp; advertising networks</li>
                  <li>analytics firms</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
