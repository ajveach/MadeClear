import React from 'react'
import { Row, Col, Grid, Image } from 'react-bootstrap'

import './HowWeStoreData.scss'

export default class HowWeStoreData extends React.Component {
  deviceComponent () {
    if (this.props.policy.dataStoreDeviceYes) {
      return <h3 className='segment-subtitle'>We <strong>do</strong> store your data on your device.</h3>
    }

    return <h3 className='segment-subtitle'>We <strong>do not</strong> store your data on your device.</h3>
  }

  cloudComponent () {
    if (this.props.policy.dataStoreOutsideYes) {
      return <h3 className='segment-subtitle'>
        Your data <strong>is</strong> stored by our company or a third party
      </h3>
    }

    return <h3 className='segment-subtitle'>
      Your data <strong>is not</strong> stored by our company or a third party
    </h3>
  }

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
                {this.deviceComponent()}
                {this.cloudComponent()}
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}

HowWeStoreData.propTypes = {
  policy: React.PropTypes.object
}
