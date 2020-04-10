import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './Body.scss'

const Inventory = React.lazy(() => import(/* webpackChunkName: "views/management/Inventory" */ '~/views/management/Inventory/Inventory'))

const Body = () => {
  return (
    <div className="body">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/">
            <div>not found</div>
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default Body