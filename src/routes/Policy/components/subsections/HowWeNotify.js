import React from 'react'
import { Col, Grid, Image, Row } from 'react-bootstrap'

import './HowWeNotify.scss'

export default class HowWeNotify extends React.Component {
  render () {
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin metus non nisi
                  tincidunt condimentum. Maecenas dapibus augue erat, ac dictum nunc pulvinar vel.
                  Sed sagittis mauris tristique elementum viverra. Etiam tincidunt turpis sed bibendum faucibus.
                  Integer sapien nisi, convallis sit amet ipsum vitae, egestas ornare purus.
                </p>
                <h3 className='segment-subtitle'>
                  How we will notify you and protect your data in the event of an improper disclosure
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  In sollicitudin metus non nisi tincidunt condimentum.
                  Maecenas dapibus augue erat, ac dictum nunc pulvinar vel.
                  Sed sagittis mauris tristique elementum viverra. Etiam tincidunt turpis sed bibendum faucibus.
                  Integer sapien nisi, convallis sit amet ipsum vitae, egestas ornare purus.
                </p>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
