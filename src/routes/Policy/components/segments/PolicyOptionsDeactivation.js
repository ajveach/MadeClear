import React from 'react'

import './PolicyOptionsDeactivation.scss'

// import sub sections
import HowTechnologyAccessesData from '../subsections/HowTechnologyAccessesData'
import WhatCanYouDo from '../subsections/WhatCanYouDo'
import WhatHappensToData from '../subsections/WhatHappensToData'

const PolicyOptionsDeactivation = (props) => (
  <div className='policy-options-deactivation policy-segment' id='policy-options-deactivation'>
    <HowTechnologyAccessesData />
    <WhatCanYouDo />
    <WhatHappensToData {...props} />
  </div>
)

export default PolicyOptionsDeactivation
