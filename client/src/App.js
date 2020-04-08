import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './app.scss'
import './style/style.scss'

const MainLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/MainLayout" */ './components/layouts/MainLayout/MainLayout'))

const App = () => {
  return (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout />
    </Suspense>
  </Router>
)}

export default App
