import React from 'react'

import './PolicyUseShareSell.scss'

// Subsections
import HowWeUseData from '../subsections/HowWeUseData'
import HowWeShareData from '../subsections/HowWeShareData'
import ToWhomWeSellData from '../subsections/ToWhomWeSellData'

const PolicyUseShareSell = (props) => (
  <div className='policy-use-share-sell policy-segment' id='policy-use-share-sell'>
    <HowWeUseData {...props} />
    <HowWeShareData {...props} />
    <ToWhomWeSellData {...props} />
  </div>
)

export default PolicyUseShareSell
