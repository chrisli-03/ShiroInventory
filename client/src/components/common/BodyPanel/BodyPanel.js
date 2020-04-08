import React from 'react'
import './BodyPanel.scss'

const Header = React.lazy(() => import(/* webpackChunkName: "components/common/Header" */ '~/components/common/Header/Header'))

const BodyPanel = () => {
  return (
    <div className="body_panel">
      <Header />
    </div>
  )
}

export default BodyPanel