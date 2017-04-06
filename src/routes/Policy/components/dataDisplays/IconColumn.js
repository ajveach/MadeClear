import React from 'react'
import { Image } from 'react-bootstrap'

import './IconColumn.scss'

export default class IconColumn extends React.Component {
  render () {
    return (
      <div className='icon-column'>
        <Image src={this.props.imageSrc} />
        <div className='icon-column-text'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

IconColumn.propTypes = {
  imageSrc: React.PropTypes.string,
  children: React.PropTypes.any
}
