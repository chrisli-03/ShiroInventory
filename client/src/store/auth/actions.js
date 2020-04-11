export const SET_USER = 'SET_USER'

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}

export function login(username, password) {
  return dispatch => {
    setTimeout(() => {
      dispatch(setUser({ username, token: 'token' }))
    }, 1000)
  }
}