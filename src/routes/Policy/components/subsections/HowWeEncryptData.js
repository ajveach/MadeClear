import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import IconColumn from '../dataDisplays/IconColumn'
import DoesOrDoesnt from '../util/DoesOrDoesnt'

import './HowWeEncryptData.scss'

export default class HowWeEncryptData extends React.Component {
  render () {
    return (
      <div className='how-we-encrypt-data'>
        <Grid>
          <div className='content'>
            <Row>
              <Col md={3} className='encrypt-graphic hidden-sm hidden-xs'>
                <i className='fa fa-lock' aria-hidden='true' />
              </Col>
              <Col md={9}>
                <h2 className='segment-title'>How we encrypt your data</h2>
                This app or technology...
                <Row>
                  <Col md={4}>
                    <IconColumn imageSrc='/img/icons/phone-white.png'>
                      <DoesOrDoesnt value>encrypt your data in the device or app</DoesOrDoesnt>
                    </IconColumn>
                  </Col>
                  <Col md={4}>
                    <IconColumn imageSrc='/img/icons/server-white.png'>
                      <DoesOrDoesnt value={false} postText='if you take certain actions'>
                        encrypt your data when stored on our company servers
                      </DoesOrDoesnt>
                    </IconColumn>
                  </Col>
                  <Col md={4}>
                    <IconColumn imageSrc='/img/icons/radio-tower-white.png'>
                      <DoesOrDoesnt value={false}>encrypt your data when it's transmitted</DoesOrDoesnt>
                    </IconColumn>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
