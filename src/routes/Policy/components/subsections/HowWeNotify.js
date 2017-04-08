import React from 'react'
import { Col, Grid, Image, Row } from 'react-bootstrap'

import './HowWeNotify.scss'

export default class HowWeNotify extends React.Component {
  render () {
    let notificationOfChangeLink
    if (this.props.policy.notificationOfChangePolicyURL) {
      notificationOfChangeLink = <a
        href={this.props.policy.notificationOfChangePolicyURL}
        title='Learn more'
        target='_blank'>
          Learn more
        </a>
    }

    let notificationOfBreachLink
    if (this.props.policy.notificationOfBreachPolicyURL) {
      notificationOfBreachLink = <a
        href={this.props.policy.notificationOfBreachPolicyURL}
        title='Learn more'
        target='_blank'>
          Learn more
        </a>
    }

    return (
      <div className='how-we-notify'>
        <Grid>
          <div className='content'>
            <Row>
              <Col md={3} className='segment-icon'>
                <Image src='/img/icons/11Icon.png' />
              </Col>
              <Col md={9}>
                <h3 className='segment-subtitle'>How we will notify you if our privacy policy changes</h3>
                <p>
                  {this.props.policy.notificationOfChangeDescription}
                </p>
                {notificationOfChangeLink}
                <h3 className='segment-subtitle'>
                  How we will notify you and protect your data in the event of an improper disclosure
                </h3>
                <p>
                  {this.props.policy.notificationOfBreachDescription}
                </p>
                {notificationOfBreachLink}
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}

HowWeNotify.propTypes = {
  policy: React.PropTypes.object.isRequired
}
