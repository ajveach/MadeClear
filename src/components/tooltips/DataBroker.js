import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

let url = 'https://www.ftc.gov/news-events/press-releases/2012' +
  '/12/ftc-study-data-broker-industrys-collection-use-consumer-data'

const popoverDataBroker = (
  <Popover id='popover-data-broker' className='tooltip-popover' title='Data broker means:'>
    Companies that collect personal information about consumers from a variety of public and
    non-public sources and resell the information to other companies.
  </Popover>
)

export default class TriggerDataBroker extends React.Component {
  render () {
    return (
      <OverlayTrigger trigger={['hover', 'focus', 'click']} placement='top' overlay={popoverDataBroker}>
        <span className='policy-tooltip'>
          data brokers <a href={url} target='_blank'><i className='fa fa-info-circle' /></a>
        </span>
      </OverlayTrigger>
    )
  }
}
