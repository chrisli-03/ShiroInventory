import { Link } from 'react-router-dom'
import React from 'react'

export default [
  {
    title: 'Item Name',
    dataIndex: 'itemName',
    key: 'itemName'
  },
  {
    title: 'Item Code',
    dataIndex: 'itemCode',
    key: 'itemCode',
    render: (_, item) => { return <Link to={{ pathname: `/inventory/${item.itemCode}`, state: { item } }}>{item.itemCode}</Link> }
  },
  {
    title: 'Specification',
    dataIndex: 'itemSpec',
    key: 'itemSpec',
  },
  {
    title: 'Restock',
    key: 'restock',
    render: (_, { inventoryItemRestocks }) => inventoryItemRestocks.reduce((acc, n) => acc + n.itemQuantity, 0)
  },
  {
    title: 'Consumption',
    key: 'consumption',
    render: (_, { inventoryItemConsumptions }) => inventoryItemConsumptions.reduce((acc, n) => acc + n.consumptionAmount, 0)
  },
  {
    title: 'Available',
    dataIndex: 'itemAvailable',
    key: 'itemAvailable'
  }
]