import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

const popoverIdentifiableData = (
  <Popover id='popover-identifiable-data' className='tooltip-popover' title='Identifiable data means:'>
    Data, such as your name, phone number, email,
    address, health services, information on your physical or mental health conditions, or your social security number,
    that can be used on its own or with other information to identify you.
  </Popover>
)

export default class TriggerIdentifiableData extends React.Component {
  render () {
    return (
      <OverlayTrigger trigger={['hover', 'focus', 'click']} placement='top' overlay={popoverIdentifiableData}>
        <span className='policy-tooltip'>identifiable data</span>
      </OverlayTrigger>
    )
  }
}
