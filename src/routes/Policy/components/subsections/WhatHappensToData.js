import React from "react";
import { Grid } from "react-bootstrap";

export default class WhatHappensToData extends React.Component{
  render(){
    return (
      <div className="what-happens-to-data">
        <Grid>
          <h2 className="segment-title">What happens to your data after it is deactivated?</h2>
          <p>When your account is deactivated or terminated by you or {this.props.params.companyName}, your data are deleted after <strong>10</strong> years.</p>
        </Grid>
      </div>
    )
  }
}