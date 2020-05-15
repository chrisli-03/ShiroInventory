import { Link } from 'react-router-dom'
import React from 'react'

export default [
  {
    title: 'Warehouse Name',
    dataIndex: 'warehouseName',
    key: 'warehouseName',
    render: (warehouseName, { id }) => { return <Link to={`/warehouse/${id}`}>{warehouseName}</Link> }
  },
  {
    title: 'Address',
    dataIndex: 'warehouseAddress',
    key: 'warehouseAddress'
  }
]