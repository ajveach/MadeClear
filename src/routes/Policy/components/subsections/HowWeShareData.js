import React from 'react'
import { Col, Grid, Image, Row } from 'react-bootstrap'
import TriggerIdentifiableData from '../../../../components/tooltips/IdentifiableData'
import TriggerAnalytics from '../../../../components/tooltips/Analytics'

let optionsIdentifiable = {
  dataSharingExternalDataPrimaryService: <span>To provide the primary service of the app or technology</span>,
  dataSharingExternalDataResearch: <span>To conduct scientific research</span>,
  dataSharingExternalDataOperations: <span>For company operations (e.g., quality control or fraud detection)</span>,
  dataSharingExternalDataDevelopment: <span>
    To develop and improve new and current products and services (e.g., <TriggerAnalytics />)
  </span>
}

let optionsNonIdentifiable = {
  dataSharingExternalDataNoIdentifiersPrimaryService: <span>
    To provide the primary service of the app or technology
  </span>,
  dataSharingExternalDataNoIdentifiersResearch: <span>To conduct scientific research</span>,
  dataSharingExternalDataNoIdentifiersOperations: <span>
    For company operations (e.g., quality control or fraud detection)
  </span>,
  dataSharingExternalDataNoIdentifiersDevelopment: <span>
    To develop and improve new and current products and services (e.g., <TriggerAnalytics />)
  </span>
}

export default class HowWeShareData extends React.Component {
  renderIdentifiableList () {
    if (this.props.policy.dataSharingExternalDataNone) {
      return
    }

    let listItems = []
    Object.keys(optionsIdentifiable).map((key, i) => {
      if (this.props.policy[key]) {
        listItems.push(<li key={i}>{optionsIdentifiable[key]}</li>)
      }
    })

    if (this.props.policy.dataSharingExternalDataOther) {
      listItems.push(<li key={listItems.length}>{this.props.policy.dataSharingExternalDataOther}</li>)
    }

    return listItems
  }

  renderNonIdentifiableList () {
    if (this.props.policy.dataSharingExternalDataNoIdentifiersNone) {
      return
    }

    let listItems = []
    Object.keys(optionsNonIdentifiable).map((key, i) => {
      if (this.props.policy[key]) {
        listItems.push(<li key={i}>{optionsNonIdentifiable[key]}</li>)
      }
    })

    if (this.props.policy.dataSharingExternalDataNoIdentifiersOther) {
      listItems.push(<li key={listItems.length}>{this.props.policy.dataSharingExternalDataNoIdentifiersOther}</li>)
    }

    return listItems
  }

  render () {
    let identifiableDataSubtitle = <h3 className='segment-subtitle'>We share your <TriggerIdentifiableData /></h3>
    if (this.props.policy.dataSharingExternalDataNone) {
      identifiableDataSubtitle = <h3 className='segment-subtitle'>
        We <strong>do not</strong> share your <TriggerIdentifiableData />
      </h3>
    }

    let nonIdentifiableDataSubtitle = <h3 className='segment-subtitle'>
      We share your data <strong>after</strong> removing identifiers (note that remaining data may not be anonymous)
    </h3>
    if (this.props.policy.dataSharingExternalDataNoIdentifiersNone) {
      nonIdentifiableDataSubtitle = <h3 className='segment-subtitle'>
        We <strong>do not</strong> share your data after removing identifiers
      </h3>
    }

    return (
      <div className='segment-list how-we-share-data-externally'>
        <Grid>
          <div className='content'>
            <h2 className='segment-title'>How we share your data externally with other companies or entities</h2>
            <Row>
              <Col md={3} className='segment-icon'>
                <Image src='/img/icons/02Icon.png' />
              </Col>
              <Col md={9}>
                {identifiableDataSubtitle}
                <ul>
                  {this.renderIdentifiableList()}
                </ul>

                {nonIdentifiableDataSubtitle}
                <ul>
                  {this.renderNonIdentifiableList()}
                </ul>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}

HowWeShareData.propTypes = {
  policy: React.PropTypes.object.isRequired
}
