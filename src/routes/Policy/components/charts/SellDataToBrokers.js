import React from "react";
import { render } from "react-dom";
import { Chart } from 'react-google-charts';

export default class SellDataToBrokers extends React.Component{
  render(){
    return(
      <div className="chart-container">
        <Chart
          chartType="PieChart"
          data={[['Answer', 'Value'], ["Yes", 100], ["No", 0]]}
          options={{
            pieHole: 0.5,
            legend: 'none',
            tooltip: {trigger: "none"},
            pieSliceText: "none",
            slices: {
              0: {
                color: "#50C5B7"
              }
            }
          }}
          graph_id="sell-data-to-brokers"
          width="100%"
          height="120px"
        >
        </Chart>
        <figcaption><strong>Yes</strong> with your permission</figcaption>
      </div>
    )
  }
};