import React from 'react'

export default class YesNo extends React.Component {
  renderSubtext () {
    if (this.props.subtext) {
      return (
        <span className='subtext'>{this.props.subtext}</span>
      )
    }
    return ''
  }

  render () {
    return (
      <div className={'yes-or-no ' + this.props.value}>
        <span className='value'>{this.props.value}</span>
        {this.renderSubtext()}
      </div>
    )
  }
}

YesNo.propTypes = {
  subtext: React.PropTypes.string,
  value: React.PropTypes.string
}
