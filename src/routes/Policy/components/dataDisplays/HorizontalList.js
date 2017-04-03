import React from "react";

import "./HorizontalList.scss";

export default class HorizontalList extends React.Component{
  render(){
    return(
      <ul className="horizontal-list">
        {this.props.children}
      </ul>
    )
  }
}