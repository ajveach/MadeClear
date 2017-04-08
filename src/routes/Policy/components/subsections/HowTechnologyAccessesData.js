import React from 'react'
import { Col, Grid, Image, Row } from 'react-bootstrap'

import './HowTechnologyAccessesData.scss'

let permissions = {
  accessInfoCamera: {
    label: 'Camera',
    icon: '14Icon.png'
  },
  accessInfoPhotos: {
    label: 'Photos',
    icon: '05Icon.png'
  },
  accessInfoContacts: {
    label: 'Contacts',
    icon: '06Icon.png'
  },
  accessInfoLocationServices: {
    label: 'Location Services',
    icon: '04Icon.png'
  },
  accessInfoMicrophone: {
    label: 'Microphone',
    icon: '13Icon.png'
  },
  accessInfoHealthMonitoringDevices: {
    label: 'Health Monitoring Devices',
    icon: '15Icon.png'
  },
  accessInfoOther: {
    label: 'Other',
    icon: '12Icon.png'
  }
}

export default class HowTechnologyAccessesData extends React.Component {
  permissionGrid () {
    if (!this.props.policy.accessesOtherData) {
      return (
        <h3 className='segment-subtitle'>
          This technology or app <strong>does not</strong> request access to other device data or applications
        </h3>
      )
    }

    let items = []
    let i = -1
    Object.keys(permissions).map((key) => {
      if (this.props.policy[key]) {
        items.push(
          <Col sm={3} className='grid-item' key={++i}>
            <Image src={'/img/icons/' + permissions[key].icon} />
            <div className='grid-item-label'>{permissions[key].label}</div>
          </Col>
        )
      }
    })

    return items
  }

  shareInfo () {
    let shareInfo = []
    if (this.props.policy.userCanShare === 'yes') {
      shareInfo.push(
        <p key='1'>We <strong>do</strong> allow you to share the collected data with your social media accounts.</p>
      )
      if (this.props.policy.shareInfoLearnMore) {
        shareInfo.push(
          <a key='2' href={this.props.policy.shareInfoLearnMore} target='_blank' title='Learn more'>Learn more</a>
        )
      }
    } else if (this.props.policy.userCanShare === 'yesCondition') {
      shareInfo.push(
        <p key='1'>
          We <strong>do</strong> (with your permission) allow you to share the
          collected data with your social media accounts.
        </p>
      )
      if (this.props.policy.shareInfoLearnMore) {
        shareInfo.push(
          <a key='2' href={this.props.policy.shareInfoLearnMore} target='_blank' title='Learn more'>Learn more</a>
        )
      }
    } else {
      shareInfo.push(
        <p key='1'>We <strong>do not</strong> allow you to share the collected data with your social media accounts.</p>
      )
    }

    return shareInfo
  }

  render () {
    let accessLearnMore
    if (this.props.policy.accessInfoLearnMore) {
      accessLearnMore =
        <a href={this.props.policy.accessInfoLearnMore} title='Learn more' target='_blank'>Learn more</a>
    }

    return (
      <div className='how-technology-accesses-data'>
        <Grid>
          <h2 className='segment-title'>How this technology accesses other data</h2>
          <h3 className='segment-subtitle'>With your permission this app connects to</h3>
          {accessLearnMore}
          <Grid className='permission-grid'>
            <Row>
              {this.permissionGrid()}
            </Row>
          </Grid>

          <div className='shareInfo'>
            {this.shareInfo()}
          </div>
        </Grid>
      </div>
    )
  }
}

HowTechnologyAccessesData.propTypes = {
  policy: React.PropTypes.object.isRequired
}
