import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

const popoverAnalytics = (
  <Popover id='popover-analytics' className='tooltip-popover' title='Analytics means:'>
    The process of examining data to draw conclusions from that information.
  </Popover>
)

export default class TriggerAnalytics extends React.Component {
  render () {
    return (
      <OverlayTrigger trigger={['hover', 'focus', 'click']} placement='top' overlay={popoverAnalytics}>
        <span className='policy-tooltip'>analytics</span>
      </OverlayTrigger>
    )
  }
}
