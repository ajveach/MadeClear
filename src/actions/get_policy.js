import { ActionTypes } from '../constants/ActionTypes'
import database from '../store/database'

export function getPolicy(company, product){
  return dispatch => {
    dispatch(getPolicyRequestedAction());

    return database.ref('/policies').child(company).child(product).once('value', snap => {
      console.log(snap);
      const policy = snap.val();
      dispatch(getPolicyFulfilledAction(policy));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getPolicyRejectedAction());
    });
  }
}

function getPolicyRequestedAction(){
  return {
    type: ActionTypes.GetPolicyRequested
  }
}

function getPolicyRejectedAction(){
  return{
    type: ActionTypes.GetPolicyRejected
  }
}

function getPolicyFulfilledAction(policy){
  return{
    type: ActionTypes.GetPolicyFulfilled,
    policy
  }
}