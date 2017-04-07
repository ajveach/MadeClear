import { ActionTypes } from '../constants/ActionTypes'

export function policyReducer (state = {}, action) {
  switch (action.type) {
    case ActionTypes.GetPolicyFulfilled:
      state = action.policy
      return state
    case ActionTypes.AddPolicyFulfilled:
      state = action.policy
      return state
    default:
      return state
  }
}
