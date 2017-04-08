import React from 'react'

import './Attribution.scss'

export default class Attribution extends React.Component{
  render () {
    return (
      <div className='attribution'>
        {this.props.children}
      </div>
    )
  }
}

Attribution.propTypes = {
  children: React.PropTypes.any
}
