import { connect } from 'react-redux'
import React from 'react'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Intro from '../components/Intro'
import Form from '../components/Form'

import { addPolicy } from '../../../actions/add_policy'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => {
  return {
    addPolicy: (company, product, policy) => dispatch(addPolicy(company, product, policy))
  }
}

const mapStateToProps = (state) => ({
  policy: state.policy
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

class GenerateContainer extends React.Component {
  render () {
    return (
      <div className='generate-display'>
        <Intro {...this.props} />
        <Form {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateContainer)
