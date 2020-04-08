import React from 'react'
import './MainLayout.scss'

const SidePanel = React.lazy(() => import(/* webpackChunkName: "components/common/SidePanel" */ '~/components/common/SidePanel/SidePanel'))
const BodyPanel = React.lazy(() => import(/* webpackChunkName: "components/common/BodyPanel" */ '~/components/common/BodyPanel/BodyPanel'))

const MainLayout = () => {
  return (
    <div className="main_layout">
      <div className="main_layout-side">
        <SidePanel />
      </div>
      <div className="main_layout-body">
        <BodyPanel />
      </div>
    </div>
  )
}

export default MainLayout