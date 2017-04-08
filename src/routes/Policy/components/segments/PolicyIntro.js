import React from 'react'
import Scroll from 'react-scroll'

import './PolicyIntro.scss'
import { Col, Grid, Row } from 'react-bootstrap'

export default class PolicyIntro extends React.Component {
  hippaCoverage () {
    if (this.props.policy.hippaCoverage) {
      return (
        <p>
          Some of the health data we collect as part of {this.props.policy.product} also are
          protected by HIPAA.
          <br />
          Read our <a href={this.props.policy.hippaUrl} title='HIPAA Notice of Privacy Practices' target='_blank'>
          HIPPA Notice of Privacy Practices
          </a> for more information.
        </p>
      )
    }
    return (
      <p>
        Please note that the health data we collect as part of {this.props.policy.product}
        {' '}
        are not protected by HIPAA and our company’s HIPAA Notice of Privacy Practices does not apply.
      </p>
    )
  }

  render () {
    return (
      <div className='policy-intro policy-segment'>
        <Grid>
          <div className='content'>
            <Row>
              <Col md={10} mdOffset={1}>
                <h1 className='page-title'>Policy for {this.props.policy.product} from {this.props.policy.company}</h1>
              </Col>
            </Row>
            {this.hippaCoverage()}
          </div>
        </Grid>
        <Scroll.Link
          className='scroll-arrow fa fa-arrow-down'
          aria-hidden='true'
          to='policy-use-share-sell'
          spy smooth duration={500}
        />
      </div>
    )
  }
}

PolicyIntro.propTypes = {
  policy: React.PropTypes.object
}
