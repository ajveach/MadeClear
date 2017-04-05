import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import './Footer.scss'

export default class Footer extends React.Component{
  render(){
    return (
      <footer>
        <Grid>
          <h2 className='segment-title'>Anything unclear? Contact us.</h2>
          <Row>
            <Col md={3} className="footer-col">
              <div className='company-name'>{this.props.params.companyName}</div>
              <div className='full-privacy-policy'><Link to='http://www.google.com' target='_blank'>See full privacy policy</Link></div>
              <div className='contact-form'><Link to='http://www.google.com' target='_blank'>Use our contact form</Link></div>
            </Col>
            <Col md={3} className="footer-col">
              <div class='email'><Link to='mailto:test@test.com'>test@test.com</Link></div>
              <div class='phone'><Link to='tel:5555555555'>555 555-5555</Link></div>
              <div class='address'>
                1234 Main St.
                Nashville, TN USA
              </div>
            </Col>
          </Row>
          <div className='pull-right last-updated'>Last Updated on March 30, 2017</div>
        </Grid>
      </footer>
    )
  }
}