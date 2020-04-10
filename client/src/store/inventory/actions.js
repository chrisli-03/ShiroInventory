export const SET_LOADING = 'SET_LOADING'
export const SET_INVENTORY = 'SET_INVENTORY'
export const SET_INVENTORY_SIZE = 'SET_INVENTORY_SIZE'

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading
  }
}

export function setInventory(dataSource) {
  return {
    type: SET_INVENTORY,
    dataSource
  }
}

export function setInventorySize(size) {
  return {
    type: SET_INVENTORY_SIZE,
    size
  }
}

export function getInventorySize() {
  return dispatch => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setInventorySize(135))
    }, 1000)
  }
}

export function getInventory(page, size) {
  return dispatch => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
      const dataSource = []
      for (let i = (page - 1) * size; i < page * size; i++) {
        dataSource.push({
          key: i.toString(),
          name: 'Test',
          age: i,
          address: '10 Downing Street',
        })
      }
      dispatch(setInventory(dataSource))
    }, 2000)
  }
}
