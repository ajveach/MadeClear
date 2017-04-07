import { ActionTypes } from '../constants/ActionTypes'

export function connectionReducer (state = {}, action) {
  switch (action.type) {
    case ActionTypes.GetPolicyRequested:
    case ActionTypes.AddPolicyRequested:
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      })
    case ActionTypes.GetPolicyRejected:
      return Object.assign({}, state, {
        inProgress: false,
        error: 'The requested policy could not be found',
        success: ''
      })
    case ActionTypes.GetPolicyFulfilled:
      return Object.assign({}, state, {
        inProgress: false,
        error: '',
        success: 'The requested policy has been found'
      })
    case ActionTypes.AddPolicyRejected:
      return Object.assign({}, state, {
        inProgress: false,
        error: 'The policy could not be saved',
        success: ''
      })
    case ActionTypes.AddPolicyFulfilled:
      return Object.assign({}, state, {
        inProgress: false,
        error: '',
        success: 'The policy has been saved'
      })
    default:
      return state
  }
}
