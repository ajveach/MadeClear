import React from "react";
import { Grid, Row, Col, Image } from 'react-bootstrap'

import "./HowTechnologyAccessesData.scss";
import { Link } from 'react-router'

let permissionImages = {
  "Location": "04Icon.png",
  "Images": "05Icon.png",
  "Contacts": "06Icon.png"
};

function permissionGrid(permissions){
  let permissionGridItems = [];
  permissions.map((permission, i) => {
    permissionGridItems.push(
      <div className="grid-item" key={i}>
        <Image src={"/img/icons/" + permissionImages[permission]}/>
        <div className="grid-item-label">{permission}</div>
      </div>
    );
  });

  return permissionGridItems;
}

export default class HowTechnologyAccessesData extends React.Component{
  render(){
    return (
      <div className="how-technology-accesses-data">
        <Grid>
          <h2 className="segment-title">How this technology accesses other data</h2>
          <h3 className="segment-subtitle">With your permission this app connects to:</h3>
          <div className="permission-grid">
            {permissionGrid(["Location","Images","Contacts"])}
          </div>

          <p>We <strong>do</strong> allow you to share the collected data with your social media accounts. <Link to="http://www.google.com" target="_blank">Learn more</Link></p>
        </Grid>
      </div>
    )
  }
}