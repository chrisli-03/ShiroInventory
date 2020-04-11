import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { authReducer } from './auth/reducers'
import { inventoryReducer } from './inventory/reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  inventory: inventoryReducer
})

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
}
