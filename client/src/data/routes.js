import React from 'react'

const Dashboard = React.lazy(() => import(/* webpackChunkName: "views/main/Dashboard" */ '~/views/main/Dashboard/Dashboard'))
const TableWrapper = React.lazy(() => import(/* webpackChunkName: "components/wrappers/TableWrapper" */ '~/components/wrappers/TableWrapper/TableWrapper'))
const InventoryList = React.lazy(() => import(/* webpackChunkName: "views/management/Inventory/InventoryList" */ '~/views/management/Inventory/InventoryList/InventoryList'))
const RestockList = React.lazy(() => import(/* webpackChunkName: "views/management/Restock/RestockList" */ '~/views/management/Restock/RestockList/RestockList'))
const ConsumptionList = React.lazy(() => import(/* webpackChunkName: "views/management/Consumption/ConsumptionList" */ '~/views/management/Consumption/ConsumptionList/ConsumptionList'))
const WarehouseList = React.lazy(() => import(/* webpackChunkName: "views/management/Warehouse/WarehouseList" */ '~/views/management/Warehouse/WarehouseList/WarehouseList'))
const WarehouseNew = React.lazy(() => import(/* webpackChunkName: "views/management/Warehouse/WarehouseNew" */ '~/views/management/Warehouse/WarehouseNew/WarehouseNew'))
const SupplierList = React.lazy(() => import(/* webpackChunkName: "views/management/Supplier/SupplierList" */ '~/views/management/Supplier/SupplierList/SupplierList'))
const SupplierNew = React.lazy(() => import(/* webpackChunkName: "views/management/Supplier/SupplierNew" */ '~/views/management/Supplier/SupplierNew/SupplierNew'))

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
            component: WarehouseNew
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
            component: SupplierNew
          }
        ]
      }
    ]
  }
]

export default routes