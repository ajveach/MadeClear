import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import IconColumn from '../dataDisplays/IconColumn'
import DoesOrDoesnt from '../util/DoesOrDoesnt'

import './HowWeEncryptData.scss'
import TriggerEncryptionInfo from '../../../../components/tooltips/EncryptionInfo'
import TriggerCloudComputing from '../../../../components/tooltips/CloudComputing'

export default class HowWeEncryptData extends React.Component {
  deviceColumn () {
    let innerElement
    switch (this.props.policy.deviceEncryption) {
      case 'yes': {
        innerElement = <DoesOrDoesnt value>encrypt your data in the device or app</DoesOrDoesnt>
        break
      }
      case 'yesCondition': {
        innerElement = <DoesOrDoesnt value>
          encrypt your data in the device or
          app if you take <TriggerEncryptionInfo info={this.props.policy.deviceEncryptionAdditionalInfo} />
        </DoesOrDoesnt>
        break
      }
      case 'no': {
        innerElement = <DoesOrDoesnt value={false}>encrypt your data in the device or app</DoesOrDoesnt>
        break
      }
    }

    if (!innerElement) {
      return
    }

    return (
      <Col md={4}>
        <IconColumn imageSrc='/img/icons/phone-white.png'>
          {innerElement}
        </IconColumn>
      </Col>
    )
  }

  outsideColumn () {
    let innerElement
    switch (this.props.policy.outsideEncryption) {
      case 'yes': {
        innerElement = <DoesOrDoesnt value>
          encrypt your data when stored on our company servers
          or with an outside <TriggerCloudComputing /> services provider
        </DoesOrDoesnt>
        break
      }
      case 'yesCondition': {
        innerElement = <DoesOrDoesnt value>
          encrypt your data when stored on our company servers
          or with an outside <TriggerCloudComputing /> services provider
          if you take <TriggerEncryptionInfo info={this.props.policy.outsideEncryptionAdditionalInfo} />
        </DoesOrDoesnt>
        break
      }
      case 'no': {
        innerElement = <DoesOrDoesnt value={false}>
          encrypt your data when stored on our company servers
          or with an outside <TriggerCloudComputing /> services provider
        </DoesOrDoesnt>
        break
      }
      default: {
        innerElement = ''
      }
    }

    if (innerElement) {
      return (
        <Col md={4}>
          <IconColumn imageSrc='/img/icons/server-white.png'>
            {innerElement}
          </IconColumn>
        </Col>
      )
    }

    return
  }

  transmittedColumn () {
    let innerElement
    switch (this.props.policy.transmittedEncryption) {
      case 'yes': {
        innerElement = <DoesOrDoesnt value>encrypt your data while it is transmitted</DoesOrDoesnt>
        break
      }
      case 'yesCondition': {
        innerElement = <DoesOrDoesnt value>
          encrypt your data while it is transmitted
          if you take <TriggerEncryptionInfo info={this.props.policy.deviceEncryptionAdditionalInfo} />
        </DoesOrDoesnt>
        break
      }
      case 'no': {
        innerElement = <DoesOrDoesnt value={false}>encrypt your data while it is transmitted</DoesOrDoesnt>
        break
      }
    }

    if (innerElement) {
      return (
        <Col md={4}>
          <IconColumn imageSrc='/img/icons/radio-tower-white.png'>
            {innerElement}
          </IconColumn>
        </Col>
      )
    }

    return
  }

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
                  {this.deviceColumn()}
                  {this.outsideColumn()}
                  {this.transmittedColumn()}
                </Row>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}

HowWeEncryptData.propTypes = {
  policy: React.PropTypes.object.isRequired
}
