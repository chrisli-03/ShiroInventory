import { SET_LOADING, SET_LIST, SET_LIST_SIZE } from './actions'

export function listReducer(state = {}, action) {
  switch (action.type) {
    case SET_LOADING:
      return Object.assign({}, state, { [action.key]: Object.assign({}, state[action.key], { loading: action.loading }) })
    case SET_LIST:
      return Object.assign({}, state, { [action.key]: Object.assign({}, state[action.key], { dataSource: action.dataSource }) })
    case SET_LIST_SIZE:
      return Object.assign({}, state, { [action.key]: Object.assign({}, state[action.key], { size: action.size }) })
    default:
      return state
  }
}
