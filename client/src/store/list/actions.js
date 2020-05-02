export const SET_LOADING = 'SET_LOADING'
export const SET_LIST = 'SET_LIST'
export const SET_LIST_SIZE = 'SET_LIST_SIZE'
import { request } from '~/lib/api'

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
    request(`${key}_count`, 'get').then(size => {
      dispatch(setListSize(size, key))
      if (size === 0) dispatch(setLoading(false, key))
    })
  }
}

export function getList(page, size, key) {
  return dispatch => {
    dispatch(setLoading(true, key))
    request(`${key}`, 'get', null, `page=${page}&size=${size}`).then(data => {
      dispatch(setList(data.map((n, i) => ({ ...n, key: i })), key))
      dispatch(setLoading(false, key))
    })
  }
}
