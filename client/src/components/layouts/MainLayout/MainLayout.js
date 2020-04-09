import React from 'react'
import './MainLayout.scss'

const SidePanel = React.lazy(() => import(/* webpackChunkName: "components/common/SidePanel" */ '~/components/common/SidePanel/SidePanel'))
const MainPanel = React.lazy(() => import(/* webpackChunkName: "components/common/MainPanel" */ '~/components/common/MainPanel/MainPanel'))

const MainLayout = () => {
  return (
    <div className="main_layout">
      <div className="main_layout-side">
        <SidePanel />
      </div>
      <div className="main_layout-body">
        <MainPanel />
      </div>
    </div>
  )
}

export default MainLayout