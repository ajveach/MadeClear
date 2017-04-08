import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

const popoverBreach = (
  <Popover id='popover-breach' className='tooltip-popover' title='Breach means:'>
    An unauthorized disclosure.
  </Popover>
)

export default class TriggerBreach extends React.Component {
  render () {
    return (
      <OverlayTrigger trigger={['hover', 'focus', 'click']} placement='top' overlay={popoverBreach}>
        <span className='policy-tooltip'>breach</span>
      </OverlayTrigger>
    )
  }
}
