import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import Icon from '@ant-design/icons'
import routes from '~/data/routes'
import './SidePanel.scss'
import shiro from '~/assets/shiro.svg'

const { SubMenu, Item } = Menu

const SidePanel = () => {
  const location = useLocation()

  return (
    <div className="side_panel">
      <h1 className="side_panel-logo">
        <Icon component={shiro} fill="#faad14" style={{ fontSize: '36px', marginRight: '5px' }} />
        Shiro Inventory
      </h1>
      <nav className="side_panel-nav">
        <Menu
          defaultOpenKeys={routes.map(subMenu => subMenu.label)}
          defaultSelectedKeys={[location.pathname.split('/')[1]]}
          mode="inline"
        >
          {routes.map(subMenu => (
            <SubMenu
              key={subMenu.label}
              title={
                <span>
                  <span>{subMenu.label}</span>
                </span>
              }
            >
              {subMenu.routes.map(route => (
                <Item key={route.path}>
                  <Link to={`/${route.path}`}>{route.name}</Link>
                </Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </nav>
    </div>
  )
}

export default SidePanel