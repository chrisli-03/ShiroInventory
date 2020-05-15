import { Link } from 'react-router-dom'
import React from 'react'

export default [
  {
    title: 'Supplier Name',
    dataIndex: 'supplierName',
    key: 'supplierName',
    render: (supplierName, { id }) => { return <Link to={`/supplier/${id}`}>{supplierName}</Link> }
  },
  {
    title: 'Address',
    dataIndex: 'supplierAddress',
    key: 'supplierAddress'
  },
  {
    title: 'Contact',
    dataIndex: 'supplierContact',
    key: 'supplierContact'
  },
  {
    title: 'Contact Name',
    dataIndex: 'supplierContactName',
    key: 'supplierContactName'
  }
]