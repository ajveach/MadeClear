import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

const popoverCloudComputing = (
  <Popover id='popover-analytics' className='tooltip-popover' title='Cloud computing means:'>
    A kind of Internet-based computing that provides shared processing
    resources and data to computers and other devices on demand.
  </Popover>
)

export default class TriggerCloudComputing extends React.Component {
  render () {
    return (
      <OverlayTrigger trigger={['hover', 'focus', 'click']} placement='top' overlay={popoverCloudComputing}>
        <span className='policy-tooltip'>cloud computing</span>
      </OverlayTrigger>
    )
  }
}
