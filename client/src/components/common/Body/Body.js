import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Body.scss'

const Inventory = React.lazy(() => import(/* webpackChunkName: "views/management/Inventory" */ '~/views/management/Inventory/Inventory'))

const Body = () => {
  return (
    <div className="body">
      <Switch>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/">
          <div>not found</div>
        </Route>
      </Switch>
    </div>
  )
}

export default Body