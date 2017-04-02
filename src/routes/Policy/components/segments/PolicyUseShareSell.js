import React from 'react';
import { Popover, OverlayTrigger, Label } from "react-bootstrap";
import { Chart } from 'react-google-charts';

import './PolicyUseShareSell.scss';

// Charts
import SellDataToBrokers from "../charts/SellDataToBrokers";

const popoverIdentifiableData = (
  <Popover id="popover-identifiable-data" title="Identifiable Data">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Popover>
);

class TriggerIdentifiableData extends React.Component{
  render(){
    return(
      <OverlayTrigger trigger={['hover','focus','click']} placement="top" overlay={popoverIdentifiableData}><span className="policy-tooltip">identifiable data</span></OverlayTrigger>
    )
  }
}

export const PolicyUseShareSell = (props) => (
  <div className="policy-use-share-sell policy-segment" id="policy-use-share-sell">
    <div className="how-we-use-identifiable-data segment-list container">
      <div className="content">
        <h2 className="segment-title">How we use your data internally</h2>
        <h3 className="segment-subtitle">We collect and use your <TriggerIdentifiableData/></h3>
        <ul>
          <li>To provide the <span className="policy-tooltip">primary service</span> of the app or technology</li>
          <li>To develop marketing material for our products</li>
          <li>To conduct scientific research</li>
          <li>For company operations (e.g., quality control or fraud detection)</li>
        </ul>
      </div>
    </div>

    <div className="segment-list how-we-share-data-externally">
      <div className="container">
        <div className="content">
          <h2 className="segment-title">How we share your data externally with other companies or entities</h2>
          <h3 className="segment-subtitle">We share your <TriggerIdentifiableData/></h3>
          <ul>
            <li>To provide the <span className="policy-tooltip">primary service</span> of the app or technology</li>
            <li>To develop marketing material for our products</li>
            <li>To conduct scientific research</li>
            <li>For company operations (e.g., quality control or fraud detection)</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="who-we-sell-data-to container">
      <div className="content">
        <h2 className="segment-title">Who we sell your data to</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-8">
                Do we sell your <TriggerIdentifiableData/> to data brokers marketing, advertising networks, or analytics firms?
              </div>
              <div className="col-md-4">
                <SellDataToBrokers />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-8">
                Do we sell your data after removing...
              </div>
              <div className="col-md-4">
                <h1 className="label-header"><Label bsStyle="warning">Yes <i className="fa fa-check" aria-hidden="true"></i></Label></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PolicyUseShareSell
