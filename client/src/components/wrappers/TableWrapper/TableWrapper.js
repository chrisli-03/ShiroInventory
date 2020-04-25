import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './TableWrapper.scss'

const TableWrapper = ({ match, routes }) => {
  if (match.isExact) return <Redirect to={`${match.path}/list`} />
  return (
    <Switch>
      {
        routes.map(route => (
          <Route path={`${match.path}/${route.path}`} component={route.component} key={route.path} />
        ))
      }
    </Switch>
  )
}

export default TableWrapper