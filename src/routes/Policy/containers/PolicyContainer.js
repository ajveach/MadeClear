import { connect } from 'react-redux'
import React from 'react'

import '../PolicyDisplay.scss'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import PolicyIntro from '../components/segments/PolicyIntro'
import PolicyUseShareSell from '../components/segments/PolicyUseShareSell'
import PolicyStoreEncypt from '../components/segments/PolicyStoreEncypt'
import PolicyOptionsDeactivation from '../components/segments/PolicyOptionsDeactivation'
import PolicyPolicies from '../components/segments/PolicyPolicies'
import Footer from '../../../components/Footer/Footer'

import { getPolicy } from '../../../actions/get_policy'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPolicy: (company, product) => dispatch(getPolicy(company, product))
  }
}

const mapStateToProps = (state) => ({

})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

class PolicyContainer extends React.Component {
  componentDidMount () {
    this.props.onGetPolicy(this.props.params.companyName, this.props.params.productName)
  }

  render () {
    return (
      <div className='policy-display'>
        <PolicyIntro {...this.props} />
        <PolicyUseShareSell {...this.props} />
        <PolicyOptionsDeactivation {...this.props} />
        <PolicyStoreEncypt {...this.props} />
        <PolicyPolicies {...this.props} />
        <Footer {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PolicyContainer)
