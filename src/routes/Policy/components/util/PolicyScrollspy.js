import React from 'react'
import { Scrollspy } from 'react-scrollspy'
import Scroll from 'react-scroll'

import './PolicyScrollspy.scss'
import { OverlayTrigger, Popover } from 'react-bootstrap'

const popover = (title) => (
  <Popover className='scrollspy-popover'>
    {title}
  </Popover>
)

export default class PolicyScrollspy extends React.Component {
  render () {
    return (
      <Scrollspy
        items={
          ['policy-use-share-sell', 'policy-options-deactivation', 'policy-store-encrypt', 'policy-policies', 'footer']
        }
        currentClassName='is-current'
        className='policy-scrollspy'
        offset={-window.innerHeight / 2}
      >
        <li>
          <OverlayTrigger trigger={['hover']} placement='left' overlay={popover('Use/Share/Sell')}>
            <Scroll.Link
              aria-hidden='true'
              to='policy-use-share-sell'
              href='#policy-use-share-sell'
              spy smooth duration={500}
            />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger trigger={['hover']} placement='left' overlay={popover('User Options & Deactivation')}>
            <Scroll.Link
              aria-hidden='true'
              to='policy-options-deactivation'
              spy smooth duration={500}
              href='#policy-options-deactivation'
            />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger trigger={['hover']} placement='left' overlay={popover('Storage & Encryption')}>
            <Scroll.Link
              aria-hidden='true'
              to='policy-store-encrypt'
              spy smooth duration={500}
              href='#policy-store-encrypt'
            />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger trigger={['hover']} placement='left' overlay={popover('Policies')}>
            <Scroll.Link
              aria-hidden='true'
              to='policy-policies'
              spy smooth duration={500}
              href='#policy-policies'
            />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger trigger={['hover']} placement='left' overlay={popover('Contact Us')}>
            <Scroll.Link
              aria-hidden='true'
              to='footer'
              spy smooth duration={500}
              href='#footer'
            />
          </OverlayTrigger>
        </li>
      </Scrollspy>
    )
  }
}
