import React from 'react'
import { Col, Grid, Image, Row } from 'react-bootstrap'

import './WhatCanYouDo.scss'

let availableOptions = {
  userOptionsAccess: {
    label: 'Access',
    icon: '07Icon2.png'
  },
  userOptionsEdit: {
    label: 'Edit',
    icon: '08Icon2.png'
  },
  userOptionsShare: {
    label: 'Share',
    icon: '16Icon2.png'
  },
  userOptionsDelete: {
    label: 'Delete',
    icon: '09Icon2.png'
  }
}

export default class WhatCanYouDo extends React.Component {
  actionGrid () {
    let actionGridItems = []
    let i = -1
    Object.keys(availableOptions).map(key => {
      if (this.props.policy[key]) {
        actionGridItems.push(
          <Col sm={3} xs={6} className='grid-item' key={++i}>
            <Image src={'/img/icons/' + availableOptions[key].icon} />
            <div className='grid-item-label'>{availableOptions[key].label}</div>
          </Col>
        )
      }
    })

    return actionGridItems
  }

  render () {
    let learnMore
    if (this.props.policy.userOptionsLearnMore) {
      learnMore = <a href={this.props.policy.userOptionsLearnMore} title='Learn more' target='_blank'>Learn more</a>
    }

    let intro = <h3 className='segment-subtitle'>With the data we store you can:</h3>
    if (!this.props.policy.userOptionsAvailable) {
      intro = <h3 className='segment-subtitle'>There are no options available with your data</h3>
    }

    return (
      <div className='what-can-you-do'>
        <Grid>
          <h2 className='segment-title'>What can you do with the data we collect?</h2>
          {intro}
          <Row className='action-grid'>
            {this.actionGrid()}
          </Row>

          {learnMore}
        </Grid>
      </div>
    )
  }
}

WhatCanYouDo.propTypes = {
  policy: React.PropTypes.object.isRequired
}
