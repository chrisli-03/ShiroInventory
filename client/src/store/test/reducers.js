import { TEST_ACTION } from './actions'

export function testReducer(state = {}, action) {
  switch (action.type) {
    case TEST_ACTION:
      return Object.assign({}, state, { message: action.message })
    default:
      return state
  }
}
