import React from 'react'
import { Col, Grid, Image, Row } from 'react-bootstrap'

import './WhatHappensToData.scss'
import TriggerDeactivation from '../../../../components/tooltips/Deactivation'

export default class WhatHappensToData extends React.Component {
  whatHappens () {
    switch (this.props.policy.dataDeactivation) {
      case 'deletedImmediately': {
        return <p>
          When your account is deactivated or terminated by you or {this.props.policy.company},
          your data are deleted immediately.
        </p>
      }
      case 'deletedAfterXYears': {
        return <p>
          When your account is deactivated or terminated by you or {this.props.policy.company},
          your data are deleted after <strong>{this.props.policy.dataDeactivationDelay}</strong> years.
        </p>
      }
      case 'permanentlyRetainedAndUsed': {
        return <p>
          When your account is deactivated or terminated by you or {this.props.policy.company},
          your data are permanently retained and used.
        </p>
      }
      case 'retainedUntilDeletionRequested': {
        return <p>
          When your account is deactivated or terminated by you or {this.props.policy.company},
          your data are retained and used until you request deletion.
        </p>
      }
    }
  }

  render () {
    return (
      <div className='what-happens-to-data'>
        <Grid>
          <h2 className='segment-title'>What happens to your data after your account is <TriggerDeactivation /></h2>
          <Row>
            <Col md={6} mdOffset={2}>
              {this.whatHappens()}
            </Col>
            <Col md={3} className='segment-icon'>
              <Image src='/img/icons/10Icon.png' />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

WhatHappensToData.propTypes = {
  policy: React.PropTypes.object.isRequired
}
