import React from 'react'
import Attribution from './Attribution'

export default class IconAttribution extends React.Component{
  render () {
    return (
      <Attribution>
        <div>
          Icons made by
          {' '}
          <a href='http://www.flaticon.com/authors/prosymbols' title='Prosymbols'>Prosymbols</a>
          {' '}
          from
          {' '}
          <a href='http://www.flaticon.com' title='Flaticon'>www.flaticon.com</a>
          {' '}
          is licensed by
          {' '}
          <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>
            CC 3.0 BY
          </a>
        </div>
      </Attribution>
    )
  }
}