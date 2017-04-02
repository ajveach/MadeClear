import React from "react";
import { Grid } from "react-bootstrap";

export default class HowWeNotify extends React.Component{
  render(){
    return (
      <div className="how-we-notify">
        <Grid>
          <h2 className="segment-title">How we will notify you if our privacy policy changes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin metus non nisi tincidunt condimentum. Maecenas dapibus augue erat, ac dictum nunc pulvinar vel. Sed sagittis mauris tristique elementum viverra. Etiam tincidunt turpis sed bibendum faucibus. Integer sapien nisi, convallis sit amet ipsum vitae, egestas ornare purus.</p>
          <h2 className="segment-title">How we will notify you and protect your data in the event of an improper disclosure</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin metus non nisi tincidunt condimentum. Maecenas dapibus augue erat, ac dictum nunc pulvinar vel. Sed sagittis mauris tristique elementum viverra. Etiam tincidunt turpis sed bibendum faucibus. Integer sapien nisi, convallis sit amet ipsum vitae, egestas ornare purus.</p>
        </Grid>
      </div>
    )
  }
}