import React from 'react'
import Scroll from 'react-scroll'

import './PolicyIntro.scss'

export const PolicyIntro = (props) => (
  <div className='policy-intro policy-segment'>
    <div className='container'>
      <div className='content'>
        <div className='row'>
          <div className='col-md-10'>
            <h1 className='page-title'>Policy for {props.params.productName} from {props.params.companyName}</h1>
          </div>
          <div className='col-md-2'>
            <a href='https://en.wikipedia.org/wiki/Acme_Corporation' target='_blank'>
              <img src='/img/logos/solar-logistix.png' alt='{props.params.companyName}' />
            </a>
          </div>
        </div>
        <p>
          Please note that the health data we collect as part of this {props.params.productName}
          are not protected by HIPAA and our company’s HIPAA Notice of Privacy Practices does not apply.</p>
      </div>
    </div>
    <Scroll.Link
      className='scroll-arrow fa fa-arrow-down'
      aria-hidden='true'
      to='policy-use-share-sell'
      spy smooth duration={500}
    />
  </div>
)

export default PolicyIntro

PolicyIntro.propTypes = {
  params: React.PropTypes.object
}
