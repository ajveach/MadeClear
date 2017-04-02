import React from "react";
import { Grid } from "react-bootstrap";

import BulletList from "../dataDisplays/BulletList";

export default class WhatCanYouDo extends React.Component{
  render(){
    return (
      <div className="what-can-you-do">
        <Grid>
          <h2 className="segment-title">What can you do with the data we collect?</h2>
          <BulletList>
            <h3 className="segment-subtitle">With the data we store you can</h3>
            <ul>
              <li>access</li>
              <li>delete</li>
            </ul>
          </BulletList>
          <a href="http://www.google.com" target="_blank">How would you delete this data?</a>
        </Grid>
      </div>
    )
  }
}