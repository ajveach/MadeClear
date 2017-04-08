import React from 'react'

import './Loading.scss'

export default class Loading extends React.Component {
  render () {
    return (
      <div className='cssload-wrapper'>
        <div className='cssload-loader'>Loading</div>
      </div>
    )
  }
}
