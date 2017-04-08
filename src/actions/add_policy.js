import { ActionTypes } from '../constants/ActionTypes'
import database from '../store/database'

export function addPolicy (policy, next) {
  return dispatch => {
    dispatch(addPolicyRequestedAction())

    const policyRef = database.ref(`/policies/${policy.company.toLowerCase()}/${policy.product.toLowerCase()}`)
    policyRef.set(policy)
      .then(() => {
        dispatch(addPolicyFulfilledAction(policy))
        next()
      })
      .catch(() => {
        dispatch(addPolicyRejectedAction())
      })
  }
}

function addPolicyRequestedAction () {
  return {
    type: ActionTypes.AddPolicyRequested
  }
}

function addPolicyRejectedAction () {
  return {
    type: ActionTypes.AddPolicyRejected
  }
}

function addPolicyFulfilledAction (policy) {
  return {
    type: ActionTypes.AddPolicyFulfilled,
    policy
  }
}
