import {
  CLIENT_FAIL,
  CLIENT_SUCCESS,
} from '../types'

const initialState = {}

// const behaviors = {
//   [CLIENT_SUCCESS](state, action) {
//     return { ...state, ...action.data, success: true }
//   },
//   [CLIENT_FAIL](state, action) {
//     return { ...state, ...action.data, success: false }
//   },
// }
//
// export default (state = initialState, action) => {
//   const behavior = behaviors[action.type]
//   return behavior ? behavior(state, action) : state
// }


export default function employeeReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case CLIENT_SUCCESS:
      return { ...state, ...action.data, success: true };
    case CLIENT_FAIL:
      return { ...state, ...action.data, success: false };
    default:
      return { ...state };
  }
}
