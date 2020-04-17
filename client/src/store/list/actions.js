export const SET_LOADING = 'SET_LOADING'
export const SET_LIST = 'SET_LIST'
export const SET_LIST_SIZE = 'SET_LIST_SIZE'

export function setLoading(loading, key) {
  return {
    type: SET_LOADING,
    loading,
    key
  }
}

export function setList(dataSource, key) {
  return {
    type: SET_LIST,
    dataSource,
    key
  }
}

export function setListSize(size, key) {
  return {
    type: SET_LIST_SIZE,
    size,
    key
  }
}

export function getListSize(key) {
  return dispatch => {
    dispatch(setLoading(true, key))
    setTimeout(() => {
      const size = 0
      dispatch(setListSize(size))
      if (size === 0) dispatch(setLoading(false, key))
    }, 1000)
  }
}

export function getList(page, size, key) {
  return dispatch => {
    dispatch(setLoading(true))
    setTimeout(() => {
      const dataSource = []
      dispatch(setList(dataSource))
      dispatch(setLoading(false))
    }, 2000)
  }
}
