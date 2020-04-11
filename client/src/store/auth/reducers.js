import { SET_USER } from './actions'

export function authReducer(state = { user: {} }, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.user })
    default:
      return state
  }
}