import React from 'react'
import TriggerIdentifiableData from '../../../../components/tooltips/IdentifiableData'
import { Col, Grid, Image, Row } from 'react-bootstrap'
import TriggerAnalytics from '../../../../components/tooltips/Analytics'

let options = {
  dataUsageInternalDataPrimaryService: <span>To provide the primary service of the app or technology</span>,
  dataUsageInternalDataMarketing: <span>To develop marketing material for our products</span>,
  dataUsageInternalDataResearch: <span>To conduct scientific research</span>,
  dataUsageInternalDataOperations: <span>For company operations (e.g., quality control or fraud detection)</span>,
  dataUsageInternalDataDevelopment: <span>
    To develop and improve new and current products and services (e.g., <TriggerAnalytics />)
  </span>
}

export default class HowWeUseData extends React.Component {
  renderList () {
    let listItems = []
    let i = -1
    Object.keys(options).map((key) => {
      if (this.props.policy[key]) {
        listItems.push(<li key={++i}>{options[key]}</li>)
      }
    })

    if (this.props.policy.formDataUsageInternalDataOther) {
      listItems.push(<li key={listItems.length}>{this.props.policy.formDataUsageInternalDataOther}</li>)
    }

    return listItems
  }

  render () {
    return (
      <div className='how-we-use-identifiable-data segment-list container'>
        <Grid>
          <div className='content'>
            <h2 className='segment-title'>How we use your data internally</h2>
            <Row>
              <Col md={3} className='segment-icon'>
                <Image src='/img/icons/01Icon2.png' />
              </Col>
              <Col md={9}>
                <h3 className='segment-subtitle'>We collect and use your <TriggerIdentifiableData /></h3>
                <ul>
                  {this.renderList()}
                </ul>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}

HowWeUseData.propTypes = {
  policy: React.PropTypes.object.isRequired
}
