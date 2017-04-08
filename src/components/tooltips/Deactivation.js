import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

const popoverDeactivation = (
  <Popover id='popover-deactivation' className='tooltip-popover' title='Deactivation means:'>
    An individual takes action or a company ceases operation or deactivates an individual’s account due to inactivity.
  </Popover>
)

export default class TriggerDeactivation extends React.Component {
  render () {
    return (
      <OverlayTrigger trigger={['hover', 'focus', 'click']} placement='top' overlay={popoverDeactivation}>
        <span className='policy-tooltip'>deactivated</span>
      </OverlayTrigger>
    )
  }
}
