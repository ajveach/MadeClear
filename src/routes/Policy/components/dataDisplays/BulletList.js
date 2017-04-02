import React from "react";

export default class BulletList extends React.Component{
  render(){
    return (
      <div className="bullet-list">
        {this.props.children}
      </div>
    )
  }
}