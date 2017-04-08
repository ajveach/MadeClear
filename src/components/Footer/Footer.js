import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import IconAttribution from '../attributions/IconAttribution'
let moment = require('moment')

import './Footer.scss'

export default class Footer extends React.Component {
  formattedDate () {
    let date = moment(this.props.policy.last_modified)
    return <span className='last-updated-date'>{date.format('MMM D, YYYY h:mm:ss A')}</span>
  }

  render () {
    return (
      <footer id='footer'>
        <Grid>
          <h2 className='segment-title'>Anything unclear? Contact us.</h2>
          <Row>
            <Col md={3} className='footer-col'>
              <div className='company-name'>
                <a href={this.props.policy.primaryURL} target='_blank'>{this.props.policy.company}</a>
              </div>
              {this.props.policy.privacyPolicyURL &&
                <div className='full-privacy-policy'>
                  <Link to={this.props.policy.privacyPolicyURL} target='_blank'>See full privacy policy</Link>
                </div>
              }
              {this.props.policy.contactFormURL &&
                <div className='contact-form'>
                  <Link to={this.props.policy.contactFormURL} target='_blank'>Use our contact form</Link>
                </div>
              }
            </Col>
            <Col md={3} className='footer-col'>
              {this.props.policy.email &&
                <div className='email'>
                  <Link to={'mailto:' + this.props.policy.email}>{this.props.policy.email}</Link>
                </div>
              }
              {this.props.policy.phone &&
                <div className='phone'>
                  <Link to={'tel:' + this.props.policy.phone}>{this.props.policy.phone}</Link>
                </div>
              }
              <div className='address'>
                {this.props.policy.address}
              </div>
            </Col>
          </Row>
          <div className='pull-right last-updated'>Last Updated on {this.formattedDate()}</div>

          <IconAttribution />
        </Grid>
      </footer>
    )
  }
}

Footer.propTypes = {
  policy: React.PropTypes.object.isRequired
}
