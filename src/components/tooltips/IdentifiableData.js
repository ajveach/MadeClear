import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

const popoverIdentifiableData = (
  <Popover id='popover-identifiable-data' title='Identifiable Data'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
