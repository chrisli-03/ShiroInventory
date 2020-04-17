import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Spinner from '~/components/Spinner/Spinner'
import routes from '~/data/routes'
import './Body.scss'

const routeList = routes.reduce((acc, route) => [...acc, ...route.routes], [])

const Body = () => {
  return (
    <div className="body">
      <Suspense fallback={<Spinner />}>
        <Switch>
          {
            routeList.map(route => {
              const Component = route.component
              return (
                <Route path={`/${route.path}`} key={route.path}>
                  <Component />
                </Route>
              )
            })
          }
          <Route path="/">
            <div>not found</div>
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default Body