import React from 'react';
import { Popover, OverlayTrigger, Label } from "react-bootstrap";
import { Chart } from 'react-google-charts';

import './PolicyUseShareSell.scss';

// Subsections
import HowWeUseData from '../subsections/HowWeUseData'
import HowWeShareData from '../subsections/HowWeShareData'
import ToWhomWeSellData from '../subsections/ToWhomWeSellData'

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

const PolicyUseShareSell = (props) => (
  <div className="policy-use-share-sell policy-segment" id="policy-use-share-sell">
    <HowWeUseData/>
    <HowWeShareData/>
    <ToWhomWeSellData/>
  </div>
)

export default PolicyUseShareSell;