import React from 'react'
import './MainPanel.scss'

const Header = React.lazy(() => import(/* webpackChunkName: "components/common/Header" */ '~/components/common/Header/Header'))
const Body = React.lazy(() => import(/* webpackChunkName: "components/common/Body" */ '~/components/common/Body/Body'))

const MainPanel = () => {
  return (
    <div className="body_panel">
      <Header />
      <Body />
    </div>
  )
}

export default MainPanel