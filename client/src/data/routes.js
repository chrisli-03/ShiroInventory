import React from 'react'

const Dashboard = React.lazy(() => import(/* webpackChunkName: "views/main/Dashboard" */ '~/views/main/Dashboard/Dashboard'))
const TableWrapper = React.lazy(() => import(/* webpackChunkName: "components/wrappers/TableWrapper" */ '~/components/wrappers/TableWrapper/TableWrapper'))
const InventoryList = React.lazy(() => import(/* webpackChunkName: "views/management/Inventory/InventoryList" */ '~/views/management/Inventory/InventoryList/InventoryList'))
const RestockList = React.lazy(() => import(/* webpackChunkName: "views/management/Restock/RestockList" */ '~/views/management/Restock/RestockList/RestockList'))
const RestockForm = React.lazy(() => import(/* webpackChunkName: "views/management/Restock/RestockForm" */ '~/views/management/Restock/RestockForm/RestockForm'))
const ConsumptionList = React.lazy(() => import(/* webpackChunkName: "views/management/Consumption/ConsumptionList" */ '~/views/management/Consumption/ConsumptionList/ConsumptionList'))
const WarehouseList = React.lazy(() => import(/* webpackChunkName: "views/management/Warehouse/WarehouseList" */ '~/views/management/Warehouse/WarehouseList/WarehouseList'))
const WarehouseForm = React.lazy(() => import(/* webpackChunkName: "views/management/Warehouse/WarehouseForm" */ '~/views/management/Warehouse/WarehouseForm/WarehouseForm'))
const SupplierList = React.lazy(() => import(/* webpackChunkName: "views/management/Supplier/SupplierList" */ '~/views/management/Supplier/SupplierList/SupplierList'))
const SupplierForm = React.lazy(() => import(/* webpackChunkName: "views/management/Supplier/SupplierForm" */ '~/views/management/Supplier/SupplierForm/SupplierForm'))

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
        component: TableWrapper,
        children: [
          {
            path: 'list',
            component: InventoryList
          }
        ]
      },
      {
        name: 'Restock',
        path: 'restock',
        component: TableWrapper,
        children: [
          {
            path: 'list',
            component: RestockList
          },
          {
            path: 'new',
            component: RestockForm
          },
          {
            path: ':id',
            component: RestockForm
          }
        ]
      },
      {
        name: 'Consumption',
        path: 'consumption',
        component: TableWrapper,
        children: [
          {
            path: 'list',
            component: ConsumptionList
          }
        ]
      },
      {
        name: 'Warehouse',
        path: 'warehouse',
        component: TableWrapper,
        children: [
          {
            path: 'list',
            component: WarehouseList
          },
          {
            path: 'new',
            component: WarehouseForm
          },
          {
            path: ':id',
            component: WarehouseForm
          }
        ]
      },
      {
        name: 'Supplier',
        path: 'supplier',
        component: TableWrapper,
        children: [
          {
            path: 'list',
            component: SupplierList
          },
          {
            path: 'new',
            component: SupplierForm
          },
          {
            path: ':id',
            component: SupplierForm
          }
        ]
      }
    ]
  }
]

export default routes