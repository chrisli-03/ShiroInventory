import { SET_LOADING, SET_INVENTORY, SET_INVENTORY_SIZE } from './actions'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }
]

export function inventoryReducer(state = { loading: true, columns, dataSource: [], size: 1 }, action) {
  switch (action.type) {
    case SET_LOADING:
      return Object.assign({}, state, { loading: action.loading })
    case SET_INVENTORY:
      return Object.assign({}, state, { dataSource: action.dataSource })
    case SET_INVENTORY_SIZE:
      return Object.assign({}, state, { size: action.size })
    default:
      return state
  }
}
