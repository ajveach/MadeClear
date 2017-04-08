import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

const popoverEncryptionInfo = (info) => (
  <Popover id='popover-analytics' className='tooltip-popover' title='Additional information'>
    {info}
  </Popover>
)

export default class TriggerEncryptionInfo extends React.Component {
  render () {
    return (
      <OverlayTrigger
        trigger={['hover', 'focus', 'click']}
        placement='top'
        overlay={popoverEncryptionInfo(this.props.info)}
      >
        <span className='policy-tooltip'>certain actions</span>
      </OverlayTrigger>
    )
  }
}

TriggerEncryptionInfo.propTypes = {
  info: React.PropTypes.string.isRequired
}
