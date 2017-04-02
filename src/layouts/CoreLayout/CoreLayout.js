import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='text-center full-height'>
    <div className='core-layout__viewport full-height'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
