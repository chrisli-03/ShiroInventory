import React from 'react'

const Dashboard = React.lazy(() => import(/* webpackChunkName: "views/main/Dashboard" */ '~/views/main/Dashboard/Dashboard'))
const Inventory = React.lazy(() => import(/* webpackChunkName: "views/management/Inventory" */ '~/views/management/Inventory/Inventory'))
const Restock = React.lazy(() => import(/* webpackChunkName: "views/management/Restock" */ '~/views/management/Restock/Restock'))
const Consumption = React.lazy(() => import(/* webpackChunkName: "views/management/Consumption" */ '~/views/management/Consumption/Consumption'))
const Warehouse = React.lazy(() => import(/* webpackChunkName: "views/management/Warehouse" */ '~/views/management/Warehouse/Warehouse'))
const Supplier = React.lazy(() => import(/* webpackChunkName: "views/management/Supplier" */ '~/views/management/Supplier/Supplier'))

const routes = [
  {
    label: 'Main',
    routes: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: Dashboard
      }
    ]
  },
  {
    label: 'Management',
    routes: [
      {
        name: 'Inventory',
        path: 'inventory',
        component: Inventory
      },
      {
        name: 'Restock',
        path: 'restock',
        component: Restock
      },
      {
        name: 'Consumption',
        path: 'consumption',
        component: Consumption
      },
      {
        name: 'Warehouse',
        path: 'warehouse',
        component: Warehouse
      },
      {
        name: 'Supplier',
        path: 'supplier',
        component: Supplier
      }
    ]
  }
]

export default routes