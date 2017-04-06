import React from 'react'

export default class DoesOrDoesnt extends React.Component {
  render () {
    let preText = this.props.preText ? this.props.preText + ' ' : ''
    let text = this.props.value ? 'does' : 'doesn\'t'
    let postText = this.props.postText || ''

    return (
      <div className='does-or-doesnt'>
        {preText}<strong>{text}</strong> {this.props.children} <span className='post-text'>{postText}</span>
      </div>
    )
  }
}

DoesOrDoesnt.propTypes = {
  preText: React.PropTypes.string,
  value: React.PropTypes.bool,
  postText: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string
  ])
}
