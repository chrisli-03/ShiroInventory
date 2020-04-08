export const TEST_ACTION = 'TEST_ACTION'

export function testAction(message) {
  return {
    type: TEST_ACTION,
    message
  }
}

export function testActionAsync(message) {
  return dispatch => {
    setTimeout(() => {
      dispatch(testAction(message))
    }, 1000)
  }
}
