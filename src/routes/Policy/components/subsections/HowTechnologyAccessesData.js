import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import DoesOrDoesnt from "../util/DoesOrDoesnt";

export default class HowTechnologyAccessesData extends React.Component{
  render(){
    return (
      <div className="how-technology-accesses-data">
        <Grid>
          <h2 className="segment-title">How this technology accesses other data</h2>
          <Row>
            <Col md={6}>
              <h3>With your permission this app connects to:</h3>
            </Col>
            <Col md={6}>
              <DoesOrDoesnt value="true" preText="This technology or app" postText="allow you to share the collected data with your social media accounts, like Facebook" />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}