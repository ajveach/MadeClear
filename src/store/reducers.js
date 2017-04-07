import { combineReducers } from 'redux'
import locationReducer from './location'
import { policyReducer } from '../reducers/policy_reducer'
import { connectionReducer } from '../reducers/connection_reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    connection: connectionReducer,
    location: locationReducer,
    policy: policyReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
