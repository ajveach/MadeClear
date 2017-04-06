import React from 'react'
import { Grid, Image } from 'react-bootstrap'

import './WhatCanYouDo.scss'

let imageInfo = {
  'Access': '07Icon2.png',
  'Edit': '08Icon2.png',
  'Share': '',
  'Delete': '09Icon2.png'
}

function actionGrid (actions) {
  let actionGridItems = []
  actions.map((action, i) => {
    actionGridItems.push(
      <div className='grid-item' key={i}>
        <Image src={'/img/icons/' + imageInfo[action]} />
        <div className='grid-item-label'>{action}</div>
      </div>
    )
  })

  return actionGridItems
}

export default class WhatCanYouDo extends React.Component {
  render () {
    return (
      <div className='what-can-you-do'>
        <Grid>
          <h2 className='segment-title'>What can you do with the data we collect?</h2>
          <h3 className='segment-subtitle'>With the data we store you can:</h3>
          <div className='action-grid'>
            {actionGrid(['Access', 'Edit', 'Delete'])}
          </div>
        </Grid>
      </div>
    )
  }
}
