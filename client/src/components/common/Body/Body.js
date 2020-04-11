import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Spinner from '~/components/Spinner/Spinner'
import './Body.scss'

const Dashboard = React.lazy(() => import(/* webpackChunkName: "views/main/Dashboard" */ '~/views/main/Dashboard/Dashboard'))
const Inventory = React.lazy(() => import(/* webpackChunkName: "views/management/Inventory" */ '~/views/management/Inventory/Inventory'))

const Body = () => {
  return (
    <div className="body">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
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