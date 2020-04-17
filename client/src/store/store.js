import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { authReducer } from './auth/reducers'
import { listReducer } from './list/reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  list: listReducer
})

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
}
