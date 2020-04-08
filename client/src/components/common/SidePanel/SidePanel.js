import React from 'react'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import Icon from '@ant-design/icons'
import './SidePanel.scss'

const { SubMenu, Item } = Menu

import shiro from '~/assets/shiro.svg'

const SidePanel = () => {
  const location = useLocation()
  console.log(shiro)
  const handleClick = e => {
    console.log('click ', e)
  }

  return (
    <div className="side_panel">
      <div className="side_panel-logo">
        <Icon component={shiro} fill="#fff" />
        Logo
      </div>
      <nav className="side_panel-nav">
        <Router>
          <Menu
            onClick={handleClick}
            defaultOpenKeys={['sub1']}
            defaultSelectedKeys={[location.pathname.split('/')[1]]}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                <span>Navigation One</span>
              </span>
              }
            >
              <Item key="page1">
                <Link to="/page1">Page 1</Link>
              </Item>
              <Item key="page2">
                <Link to="/page2">Page 2</Link>
              </Item>
            </SubMenu>
          </Menu>
        </Router>
      </nav>
    </div>
  )
}

export default SidePanel