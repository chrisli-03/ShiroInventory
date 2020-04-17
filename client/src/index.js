import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './store/store'
import tableInfo from './data/table/tableInfo'

const list = {}
for (const tableID in tableInfo) {
  list[tableInfo[tableID].key] = { loading: true, dataSource: [], size: 0 }
}

const store = configureStore({ list })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
