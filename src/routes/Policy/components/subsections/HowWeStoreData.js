import React from "react";
import { Row, Col, Label } from "react-bootstrap";

import TriggerIdentifiableData from "../../../../components/tooltips/IdentifiableData";

import "./HowWeStoreData.scss";

export default class HowWeStoreData extends React.Component{
  render(){
    return (
      <div className="how-we-store-data">
        <div className="container">
          <div className="content">
            <h2 className="segment-title">How we store your data</h2>
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={8}>
                    Do we sell your <TriggerIdentifiableData/> to data brokers marketing, advertising networks, or analytics firms?
                  </Col>
                  <Col md={4}>
                    <h1 className="label-header"><Label bsStyle="info">Yes <i className="fa fa-check" aria-hidden="true"></i></Label></h1>
                    <div className="label-subtitle">with your permission</div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={8}>
                    Do we sell your data after removing...
                  </Col>
                  <Col md={4}>
                    <h1 className="label-header"><Label bsStyle="warning">No <i className="fa fa-close" aria-hidden="true"></i></Label></h1>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}