import React, { useState, useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './reset.scss'
import Spinner from '~/components/Spinner/Spinner'
import './app.scss'
import './style/style.scss'

const Login = React.lazy(() => import(/* webpackChunkName: "components/auth/Login" */ './components/auth/Login/Login'))
const MainLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/MainLayout" */ './components/layouts/MainLayout/MainLayout'))

const App = ({ user }) => {
  const [form, setForm] = useState(null)

  useEffect(() => {
    setForm(<Login setForm={setForm} />)
  }, [setForm])

  const LoginForm =
    user.token ?
    null :
    <div className="auth_panel">
      {form}
    </div>

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        {/*{LoginForm}*/}
        <MainLayout />
      </Suspense>
    </Router>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(
  mapStateToProps
)(App)
